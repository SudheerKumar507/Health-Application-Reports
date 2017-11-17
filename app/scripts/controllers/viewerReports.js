'use strict';

/**
 * @ngdoc function
 * @name healthApplicationApp.controller:ViewerCtrl
 * @description
 * # ViewerCtrl
 * Controller of the healthApplicationApp
 */
angular.module('healthApplicationApp')
  //.controller('ViewerCtrl',['userService',function (userService, $scope) {
  //.controller('ViewerCtrl', ['ViewerCtrl','$scope','userService', function($scope,userService) {
  .controller('ViewerCtrl', ViewerCtrl);

ViewerCtrl.$inject = ['$rootScope', '$scope', '$http'];
function ViewerCtrl($rootScope, $scope, $http) {
  // this.awesomeThings = [
  //   'HTML5 Boilerplate',
  //   'AngularJS',
  //   'Karma'
  // ];
  // $scope.stateInfo = function () {
  //alert("sudheer")
  // userservice.states().then(function(data){
  //   console.log(data)
  $scope.colors = [
    {name:'black', shade:'dark'},
    {name:'white', shade:'light', notAnOption: true},
    {name:'red', shade:'dark'},
    {name:'blue', shade:'dark', notAnOption: true},
    {name:'yellow', shade:'light', notAnOption: false}
  ];
   $http.get('http://192.168.1.124:3001/districts').then(function (response) {
    $scope.districts = response.data    
  }, function (response) {
    console.log(response)
    alert("Error finding contacts.");
  });

$http.get('http://192.168.1.124:3001/states').then(function (response) {
    $scope.states = response.data
    
  }, function (response) {
    console.log(response)
    alert("Error finding contacts.");
  });

  $http.get('http://192.168.1.124:3001/clusters').then(function (response) {
    $scope.clusterData = response.data
    
  }, function (response) {
    console.log(response)
    alert("Error finding contacts.");
  });

  $http.get('http://192.168.1.124:3001/villages').then(function (response) {
    $scope.villageData = response.data
    
  }, function (response) {
    console.log(response)
    alert("Error finding contacts.");
  });

  $http.get('http://192.168.1.124:3001/swasthyaSaathi').then(function (response) {
    $scope.swasthyaData = response.data
    
  }, function (response) {
    console.log(response)
    alert("Error finding contacts.");
  });


  // }
}

