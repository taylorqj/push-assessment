angular.module('assessment').factory('taskFactory', [
    '$http', 'API_URL',
    function ($http, API_URL) {
        var task = {};

        /**
         * Get all tasks for a user
         * @param  {integer} id users id
         * @return {array}   tasks
         */
        task.all = function (id) {
            return $http.get(API_URL + 'users/' + id + '/tasks').then(function (tasks) {
                return tasks.data;
            });
        }

        return task;
    }
])
