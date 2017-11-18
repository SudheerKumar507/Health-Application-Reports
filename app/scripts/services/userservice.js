'use strict';

/**
 * @ngdoc service
 * @name healthApplicationApp.userService
 * @description
 * # userService
 * Service in the healthApplicationApp.
 */
angular.module('healthApplicationApp')
  .service('userservice', function ($http, $scope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    $scope.states = function () {
      return $http.get('http://192.168.1.6:3001/states').
        then(function (response) {
          return response;
        }, function (response) {
          alert("Error finding contacts.");
        });
    }
  });

