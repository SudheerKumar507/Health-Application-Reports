'use strict';

angular.module('healthApplicationApp')

  .controller('loginCtrl', ['$rootScope', '$scope', '$http', '$location', function ($rootScope, $scope, $http, $location) {
    var baseURL = 'http://13.126.239.21:3042/index/authLog';

    $scope.login = function (auth) {
      console.log(auth)
      $http.post(baseURL, auth).then(function (response) {
        $scope.data = response.data
        console.log($scope.data)
        if ($scope.data.status == "true") {
          window.localStorage.setItem("token", JSON.stringify($scope.data.token));
          $location.path('/reports');
        } else {
          alert("Enter valid credentials")
        }
      }, function (err) {
        console.log(err);
      });
    }

    $scope.dashboard = [{
      "HoursLearning": "10",
      "PeopleEducated": "20",
      "VillagesImpact": "40",
      "ssTrained": "10",
      "PR": "40",
      "viewerReg": "1",
      "Preg": "5",
      "women": "5"

    }];
  }]);



