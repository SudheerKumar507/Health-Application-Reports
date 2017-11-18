'use strict';

angular.module('healthApplicationApp')

  .controller('loginCtrl', ['$rootScope', '$scope', '$http', '$location', function ($rootScope, $scope, $http, $location) {
    var baseURL = 'http://13.126.239.21:3042/authLog';

    $scope.login = function (auth) {   
      $http.post(baseURL, auth).then(function (response) {
        $scope.data = response.data       
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



