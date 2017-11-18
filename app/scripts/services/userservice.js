'use strict';

/**
 * @ngdoc service
 * @name healthApplicationApp.userService
 * @description
 * # userService
 * Service in the healthApplicationApp.
 */
angular.module('healthApplicationApp')
  .factory('$userService', ['$scope', '$http', '$q', function($scope, $http, $q) {
       alert("sdfsd");
      $scope.states = function () {
      return $http.get('http://192.168.1.6:3001/states').
        then(function (response) {
          alert(response);
          return response;
        }, function (response) {
          alert("Error finding contacts.");
        });
    }
  }])

