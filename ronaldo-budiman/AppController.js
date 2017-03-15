var ronCtrl = angular.module('ron.basic.controller',[]);

ronCtrl.controller('ron.ctrl', ['$scope', '$http', 'ronShareObject', ronCtrlFunc]);

function ronCtrlFunc($scope, $http, ronShareObject){

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

    $scope.$watch(function () {
        return ronShareObject.setTabActive();
    }, function () {
        $scope.tabActive = ronShareObject.getTabActive();
    });
}