'use strict';

angular.module('healthApplicationApp')

  //   .controller('ViewerCtrl', ViewerCtrl);
  // ViewerCtrl.$inject = ['$rootScope', '$scope', '$http'];
  // function ViewerCtrl($rootScope, $scope, $http) {
  .controller('ViewerCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    var baseURL = 'http://13.126.239.21:3042';
    var getStates = function () {
      $http.get(baseURL + '/states/').then(function (response) {
        $scope.states = response.data;
      }, function (err) {
        console.log(err);
      });
    }();

    $scope.getDistricts = function () {
      var data = $scope.stateID;
      $http.get(baseURL + '/district/', { params: { stateID: data } }).then(function (response) {
        $scope.districts = response.data;

      }, function (err) {
        console.log(err);
      });
    }

    $scope.getBlocks = function () {
      var data = $scope.districtID;
      $http.get(baseURL + '/block/', { params: { districtID: data } }).then(function (response) {
        $scope.blocks = response.data;
      }, function (err) {
        console.log(err);
      });
    }



    $scope.getClusters = function () {
      var data = $scope.blockID;
      $http.get(baseURL + '/cluster', { params: { blockID: data } }).then(function (response) {
        $scope.clusters = response.data;

      }, function (err) {
        console.log(err);
      })
    }
    $scope.getVillages = function () {
      var data = $scope.clusterID;
      $http.get(baseURL + '/village', { params: { clusterID: data } }).then(function (response) {
        $scope.villages = response.data;

      }, function (err) {
        console.log(err);
      });
    }

    $scope.getswasthyaSaathi = function () {
      var data = $scope.villageID;     
      $http.get(baseURL + '/swasthyaSaathi', { params: { villageID: data } }).then(function (response) {
        $scope.swasthyaData = response.data;

      }, function (err) {
        console.log(err);
      });

    }

    }])

