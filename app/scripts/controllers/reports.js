'use strict';

/**
 * @ngdoc function
 * @name healthApplicationApp.controller:ReportsCtrl
 * @description
 * # ReportsCtrl
 * Controller of the healthApplicationApp
 */
angular.module('healthApplicationApp')
  .controller('reportsCtrl', function ($location, $scope) {

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

    $scope.viewerReports = function () {
      $location.path('/viewerReports');
    }
    $scope.sessionReports = function () {
      $location.path('/sessionReports');
    }
    $scope.ssReports = function () {
      $location.path('/swasthyaSaasthi');
    }
  });
