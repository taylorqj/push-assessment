angular.module('assessment').controller('userController', [
    '$scope', 'users',
    function ($scope, users) {
        $scope.users = users;
    }
]);
