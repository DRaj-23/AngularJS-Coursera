(function () {
'use strict';

angular.module('MyFirstApp', [])

.controller('MyFirstController', function ($scope) {
    $scope.name = "Raj"
    $scope.sayHello = function() {
        return "Hello Coursera";
    }
});

})();