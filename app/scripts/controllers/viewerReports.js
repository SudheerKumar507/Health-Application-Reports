'use strict';

angular.module('healthApplicationApp')

  //   .controller('ViewerCtrl', ViewerCtrl);
  // ViewerCtrl.$inject = ['$rootScope', '$scope', '$http'];
  // function ViewerCtrl($rootScope, $scope, $http) {
  .controller('ViewerCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    var baseURL = 'http://13.126.239.21:3042';
    var getStates = function () {
      $http.get(baseURL + '/states/').then(function (response) {
        $scope.states = response.data
      }, function (err) {
        console.log(err);
      });
    }();

    $scope.getDistricts = function () {
      var data = $scope.stateID;
      $http.get(baseURL + '/district/', { params: { stateID: data } }).then(function (response) {
        $scope.districts = response.data
      }, function (err) {
        console.log(err);
      });
    }

    $scope.getBlocks = function () {
      var data = $scope.districtID;
      console.log(data)
      $http.get(baseURL + '/block/', { params: { districtID: data } }).then(function (response) {
        $scope.blocks = response.data
      }, function (err) {
        console.log(err);
      });
    }



    $scope.getClusters = function () {
      var data = $scope.blockID;
      console.log(data)
      $http.get(baseURL + '/cluster', { params: { blockID: data } }).then(function (response) {
        $scope.clusterData = response.data

      }, function (err) {
        console.log(err);
      })
    }
    $scope.getVillages = function () {
      var data = $scope.clusterID;
      $http.get(baseURL + '/village', { params: { clusterID: data } }).then(function (response) {
        $scope.villageData = response.data

      }, function (err) {
        console.log(err);
      });
    }

    $http.get(baseURL + '/swasthyaSaathi').then(function (response) {
      $scope.swasthyaData = response.data

    }, function (err) {
      console.log(err);
    });



  }])

