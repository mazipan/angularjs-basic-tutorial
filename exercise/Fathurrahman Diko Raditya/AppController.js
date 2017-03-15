var dikoCtrl = angular.module('diko.basic.controller',[]);

dikoCtrl.controller('diko.ctrl', ['$scope', '$http', 'dikoShareObject', dikoCtrlFunc]);

function dikoCtrlFunc($scope, $http, dikoShareObject){

  /*  $scope.fetchDataAfrica = function() {
        $http.get( "https://restcountries-v1.p.mashape.com/region/africa",{
            headers: {"X-Mashape-Key": "jowfdRHKwgmshuzP6EIEqsUTewg0p179OUvjsnRCUvXny4yG3n"
        }})
        .then( function(response) {
        	console.log('response : ', response);
        	$scope.data = $scope.data.concat(response.results);
        });
    }*/

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
        return dikoShareObject.setTabActive();
    }, function () {
        $scope.tabActive = dikoShareObject.getTabActive();
    });
}