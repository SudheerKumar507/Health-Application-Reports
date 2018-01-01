'use strict';

/**
 * @ngdoc function
 * @name healthApplicationApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the healthApplicationApp
 */
angular.module('healthApplicationApp')
  .controller('homeCtrl', function ($scope, $location, $http) {
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

    var baseURL = 'http://13.126.239.21:3042';
    var noofEducated = function () {
      
      $http.get(baseURL + '/index/noOfEducated').then(function (response) {
        console.log(response)
         $scope.nofoEducated = response.data.noOfEducatedcount;
         $scope.noOfPregnantAndLactating = response.data.noOfPregnantAndLactating;  
         $scope.noOfWomenEducated =  response.data.noOfWomenEducated;    

        
      }, function (err) {
        console.log(err);
      });

      $http.get(baseURL + '/index/noOfVillagesImpacted').then(function (response) {
       
         $scope.noOfVillagesImpactedCount = response.data.noOfVillagesImpactedCount;
         $scope.sstrainedCount = response.data.sstrainedCount;        

        
      }, function (err) {
        console.log(err);
      });
    }();
    
    $scope.loginForm = function(){
      $location.path('/login')
    }
  });
