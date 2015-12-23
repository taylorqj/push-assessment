var assessment = angular.module('assessment', [
        'ngRoute'
    ])
    .constant('API_URL', 'https://push-code-assessment.herokuapp.com/v1/api/')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'users/list.html',
                controller: 'userController',
                resolve: {
                    'users': ['$http', '$q', 'userFactory', 'taskFactory', function ($http, $q, userFactory, taskFactory) {
                        var promises = [];
                        var combinedResults = [];

                        /**
                         * Grab all user's and their respective tasks.
                         * v1 assessment API returns all users and we're forced to
                         * aggregate promises into $q so we can iterate through each user and
                         * ensure asynchronicity
                         * @return {array} user's with their tasks
                         */
                        return userFactory.all().then(function (users) {
                            users.forEach(function (user) {
                                promises.push(
                                    taskFactory.all(user.id).then(function (tasks) {
                                        user.tasks = tasks;

                                        combinedResults.push(user);
                                    })
                                )
                            });

                            return $q.all(promises).then(function () {
                                return combinedResults;
                            });
                        });
                    }]
                }
            })
    }]);
