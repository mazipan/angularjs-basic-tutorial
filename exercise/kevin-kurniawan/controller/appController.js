/**
 * Created by kevin kurniawan
 */
var generalController = angular.module('starwars.controller',[]);
/*var planetController = angular.module('starwars.planet.controller',[]);
var spaceshipController = angular.module('starwars.spaceship.controller',[]);
*/
generalController.controller('general.controller', ['$scope', 'sharingObject', '$http', generalFunction]);
/*planetController.controller('planet.controller', ['$scope', '$http', planetFunction]);
spaceshipController.controller('spaceship.controller', ['$scope', '$http', spaceshipFunction]);*/

function generalFunction($scope, sharingObject, $http){
    $scope.$watch(function () {
        return sharingObject.setTabActive();
    }, function () {
        $scope.tabActive = sharingObject.getTabActive();
    });
    
    $scope.fetchPlanetData = function() {
        $http.get("https://swapi.co/api/planets/")
        .then( function(response) {
            $scope.dataPlanet = response.data;
        });
    }
    $scope.fetchPlanetData();

    $scope.fetchShipData = function() {
        $http.get("https://swapi.co/api/starships/")
        .then( function(response) {
            $scope.dataSpaceship = response.data;
        });
    }
    $scope.fetchShipData();

    $scope.fetchFilmData = function() {
        $http.get("https://swapi.co/api/films/")
        .then( function(response) {
            $scope.dataFilm = response.data;
        });
    }
    $scope.fetchFilmData();

    $scope.fetchPeopleData = function() {
        $http.get("https://swapi.co/api/people/")
        .then( function(response) {
            $scope.dataPeople = response.data;
        });
    }
    $scope.fetchPeopleData();

    $scope.fetchSpeciesData = function() {
        $http.get("https://swapi.co/api/species/")
        .then( function(response) {
            $scope.dataSpecies = response.data;
        });
    }
    $scope.fetchSpeciesData();

    $scope.fetchVehicleData = function() {
        $http.get("https://swapi.co/api/vehicles/")
        .then( function(response) {
            $scope.dataVehicle = response.data;
        });
    }
    $scope.fetchVehicleData();
}

 /*function planetFunction($scope, $http){
 }

 function spaceshipFunction($scope, $http){
    
 }*/

