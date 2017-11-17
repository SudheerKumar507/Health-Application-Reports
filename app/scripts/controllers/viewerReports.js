'use strict';

angular.module('healthApplicationApp')

  .controller('ViewerCtrl', ViewerCtrl);

ViewerCtrl.$inject = ['$rootScope', '$scope', '$http'];
function ViewerCtrl($rootScope, $scope, $http) {

  var baseURL = 'http://192.168.1.6:3000';

  var getStates = function () {
    $http.get(baseURL + '/states').then(function (response) {
      $scope.states = response.data;
      return;
    }, function (err) {
      console.log(err);
    })
  }();

  $scope.getDistricts = function () {
    var data = $scope.stateID;
    $http.get(baseURL + '/district/', { params: { stateID: data } }).then(function (response) {
      $scope.districts = response.data
    }, function (err) {
      console.log(err);
    });
  }



  $scope.getClusters = function () {
    var data = $scope.districtID;
    $http.get(baseURL + '/cluster', { params: { districtID: data } }).then(function (response) {
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

  $http.get('http://192.168.1.6:3000/swasthyaSaathi').then(function (response) {
    $scope.swasthyaData = response.data

  }, function (err) {
    console.log(err);
  });



}

