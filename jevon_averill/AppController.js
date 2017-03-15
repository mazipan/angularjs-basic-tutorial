/**
 * Created by jevon.averill
 */
var jevonController = angular.module('jevon.basic.controller', ['ngResource']);

//jevonController.controller('jevon.controller', ['$scope', '$http', 'jevonShareObject', jevonControllerFunction]);

jevonController.controller("jevon.controller", ["$scope", "$resource", function($scope, $resource) {
    var users = $resource("http://www.learn-angular.org/ResourceLesson/Users/:id");
    
    $scope.getUser = function () {
        $scope.user = users.get({id: 1});
    };

    $scope.saveUser = function () {
        var response = $scope.user.$save(function () {
            alert('User Saved!');
        });
    };
}]);

// function jevonControllerFunction($scope, $http, jevonShareObject) {

//     // callback for ng-click 'fetchPlanetsData':
// 	$scope.fetchPlanetsData = function() {
//         $http.get("https://swapi.co/api/planets/")
//         .then(function(success) {
//             $scope.planetsData = success.data;
//             $scope.planetsCount = success.count;
//         }, function(error) {
//             console.log('Error: ' + error);
//         });
//     }

//     // callback for ng-click 'fetchStarshipsData':
//     $scope.fetchStarshipsData = function() {
//         $http.get("https://swapi.co/api/starships/")
//         .then(function(success) {
//             $scope.starshipsData = success.data;
//             $scope.starshipsCount = success.count;
//         }, function(error) {
//             console.log('Error: ' + error);
//         });
//     }

//     // callback for ng-click 'fetchVehiclesData':
//     $scope.fetchVehiclesData = function() {
//         $http.get("https://swapi.co/api/vehicles/")
//         .then(function(success) {
//             $scope.vehiclesData = success.data;
//             $scope.vehiclesCount = success.count;
//         }, function(error) {
//             console.log('Error: ' + error);
//         });
//     }

//     // callback for ng-click 'fetchPeopleData':
//     $scope.fetchPeopleData = function() {
//         $http.get("https://swapi.co/api/people/")
//         .then(function(success) {
//             $scope.peopleData = success.data;
//             $scope.peopleCount = success.count;
//         }, function(error) {
//             console.log('Error: ' + error);
//         });
//     }

//     // callback for ng-click 'fetchFilmsData':
//     $scope.fetchFilmsData = function() {
//         $http.get("https://swapi.co/api/films/")
//         .then(function(success) {
//             $scope.filmsData = success.data;
//             $scope.filmsCount = success.count;
//         }, function(error) {
//             console.log('Error: ' + error);
//         });
//     }

//     // callback for ng-click 'fetchSpeciesData':
//     $scope.fetchSpeciesData = function() {
//         $http.get("https://swapi.co/api/species/")
//         .then(function(success) {
//             $scope.speciesData = success.data;
//             $scope.speciesCount = success.count;
//         }, function(error) {
//             console.log('Error: ' + error);
//         });
//     }

// 	$scope.$watch(function () {
//         return jevonShareObject.setTabActive();
//     }, function () {
//         $scope.tabActive = jevonShareObject.getTabActive();
//     });
// }