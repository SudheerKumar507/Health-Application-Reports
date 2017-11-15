angular.module('healthApplicationApp')
    .service('reportService',['$scope', '$http', function ($scope, $http) {
        $scope.states = function () {
            return $http.get('http://192.168.1.6:3001/states').
                then(function (response) {
                    return response;
                }, function (response) {
                    alert("Error finding contacts.");
                });
        }


    }]);

