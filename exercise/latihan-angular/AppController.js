var mainCtrl = angular.module('main.controller',[]);

mainCtrl.controller('main.ctrl', ['$scope','$http', 'ShareObject', mainCtrlFunc]);

function mainCtrlFunc($scope, $http, ShareObject){

	$scope.$watch(function () {
        return ShareObject.setTabActive();
    }, function () {
        $scope.tabActive = ShareObject.getTabActive();
        if($scope.tabActive == "people")
        	$scope.fetchPeopleData();
        else if($scope.tabActive == "planets")
        	$scope.fetchPlanetsData();
        else if($scope.tabActive == "films")
        	$scope.fetchFilmsData();
        else if($scope.tabActive == "species")
        	$scope.fetchSpeciesData();
        else if($scope.tabActive == "vehicles")
        	$scope.fetchVehiclesData();
        else if($scope.tabActive == "starships")
        	$scope.fetchStarshipsData();
    });

	$scope.fetchPeopleData = function() {
        $http.get("http://swapi.co/api/people/")
        .then( function(response) {
        	console.log('response : ', response);
            $scope.data = response.data;
        });
    }

    $scope.fetchPlanetsData = function() {
        $http.get("http://swapi.co/api/planets/")
        .then( function(response) {
        	console.log('response : ', response);
            $scope.data = response.data;
        });
    }

	$scope.fetchFilmsData = function() {
        $http.get("https://swapi.co/api/films/")
        .then( function(response) {
        	console.log('response : ', response);
            $scope.data = response.data;
        });
    }

    $scope.fetchSpeciesData = function() {
        $http.get("http://swapi.co/api/species/")
        .then( function(response) {
        	console.log('response : ', response);
            $scope.data = response.data;
        });
    }

    $scope.fetchVehiclesData = function() {
        $http.get("http://swapi.co/api/vehicles/")
        .then( function(response) {
        	console.log('response : ', response);
            $scope.data = response.data;
        });
    }

    $scope.fetchStarshipsData = function() {
        $http.get("http://swapi.co/api/starships/")
        .then( function(response) {
        	console.log('response : ', response);
            $scope.data = response.data;
        });
    }
}

