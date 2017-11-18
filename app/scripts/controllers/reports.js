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
