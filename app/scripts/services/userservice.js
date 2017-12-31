'use strict';

/**
 * @ngdoc service
 * @name healthApplicationApp.userService
 * @description
 * # userService
 * Service in the healthApplicationApp.
 */
angular.module('healthApplicationApp')
  .service('Sample', function Sample($http, $q) {

    var baseURL = 'http://13.126.239.21:3042/index';
   
    var deferred = $q.defer();
    return {
      getStates: function () {
        $http.get(baseURL + '/states/').then(function (response) {
          var states = response.data;
          deferred.resolve(states);
          console.log(states)
        }, function (err) {
          deferred.reject(err);
        });
        return deferred.promise;
        
        
      },
    
  

      getDistrictsData: function (data) {
        var data = data;
        $http.get(baseURL + '/district/', { params: { stateID: data } }).then(function (response) {
          var districts = response.data;
          deferred.resolve(districts);
          console.log(districts)
        }, function (err) {
          deferred.reject(err);
        });
        return deferred.promise;
        console.log(deferred.promise)
      }


    }
  })

