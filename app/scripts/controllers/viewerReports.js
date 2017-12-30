

angular.module('healthApplicationApp')

  .controller('ViewerCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    var baseURL = 'http://13.126.239.21:3042';
    // var getStates = function () {
    //   $http.get(baseURL + '/states/').then(function (response) {
    //     console.log(response)
    //     $scope.states = response.data;
    //   }, function (err) {
    //     console.log(err);
    //   });
    // }();

    var getStates = function () {
      var req = {
        method: 'GET',
        url: 'http://192.168.1.18:9999/index/getState',
        headers: {
          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDY2MTc1OTAxMzl9.4oD4s5DEv5jleXZj1za-k84sxr5FH4pub0ekkFx3pr4"
        }
      }      
      $http(req).then(function (response) {
        //console.log(response.data.data)        
        $scope.states = response.data.data;
      }).catch(function (err) {
        console.log(err);
      });
    }();

    $scope.getDistricts = function () {
      var data = $scope.stateID;
      $http.get(baseURL + '/district/', { params: { stateID: data } }).then(function (response) {
        console.log(response)
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
    
    // $scope.getviewerReports = function () {
    //   var data = $scope.villageID;     
    //   $http.get(baseURL + '/viewerReports').then(function (response) {
    //     $scope.viewerReportsData = response.data;

    //   }, function (err) {
    //     console.log(err);
    //   });

    // }

    $scope.getviewerReports = function () {
      $http.get(baseURL + '/sessionReports/').then(function (response) {
        $scope.viewerData = response.data;
        console.log($scope.viewerData)

        
      }, function (err) {
        console.log(err);
      });

    }

    $scope.getviewerReports()



    }])

    

