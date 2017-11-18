'use strict';

/**
 * @ngdoc function
 * @name healthApplicationApp.controller:loginCtrl
 * @descriptions
 * # loginCtrl
 * Controller of the healthApplicationApp
 */
angular.module('healthApplicationApp')

  .controller('loginCtrl', ['$rootScope', '$scope', '$http', '$location', function ($rootScope, $scope, $http, $location) {
    var baseURL = 'http://192.168.56.1:3000/authLog';

    $scope.login = function (auth) {
      console.log(auth)

      $http.post(baseURL, auth).then(function (response) {
        $scope.data = response.data
        console.log($scope.data)
        if ($scope.data.status == "true") {
          $location.path('/reports');
        } else {
          alert("Enter valid credentials")
        }
      }, function (err) {
        console.log(err);
      });

    }
  }]);



