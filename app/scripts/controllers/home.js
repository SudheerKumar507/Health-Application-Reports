'use strict';

/**
 * @ngdoc function
 * @name healthApplicationApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the healthApplicationApp
 */
angular.module('healthApplicationApp')
  .controller('homeCtrl', function ($scope, $location) {
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
    
    $scope.loginForm = function(){
      $location.path('/login')
    }
  });
