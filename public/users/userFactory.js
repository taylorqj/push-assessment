angular.module('assessment').factory('userFactory', [
    '$http', 'API_URL',
    function ($http, API_URL) {
        var user = {};

        /**
         * Get all users
         * @return {array} users
         */
        user.all = function () {
            return $http.get(API_URL + 'users').then(function (users) {
                return users.data;
            });
        };

        return user;
    }
]);
