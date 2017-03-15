var tommyCtrl = angular.module('tommy.basic.controller',[]);

tommyCtrl.controller('tommy.ctrl', ['$scope', '$http', 'tommyShareObject', tommyCtrlFunc]);

function tommyCtrlFunc($scope, $http, tommyShareObject){

    

    $scope.$watch(function () {
        return tommyShareObject.setTabActive();
    }, function () {
        $scope.tabActive = tommyShareObject.getTabActive();
    });

    $scope.fetchDataPlanets = function() {
        $http.get( "https://swapi.co/api/planets/")
        .then( function(response) {
        	console.log('response : ', response);
            $scope.data = response.data;
        });
    }

    $scope.fetchDataSpaceships = function() {
        $http.get( "https://swapi.co/api/starships/")
        .then( function(response) {
            console.log('response : ', response);
            $scope.data = response.data;
        });
    }

    $scope.fetchDataVehicles = function() {
        $http.get( "https://swapi.co/api/vehicles/")
        .then( function(response) {
            console.log('response : ', response);
            $scope.data = response.data;
        });
    }

    $scope.fetchDataPeople = function() {
        $http.get( "https://swapi.co/api/people/")
        .then( function(response) {
            console.log('response : ', response);
            $scope.data = response.data;
        });
    }

    $scope.fetchDataSpecies = function() {
        $http.get( "https://swapi.co/api/species/")
        .then( function(response) {
            console.log('response : ', response);
            $scope.data = response.data;
        });
    }
}