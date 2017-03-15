var appRoute = angular.module('project-route',['ngRoute']);

appRoute.run(['$route', function($route)  {
    $route.reload();
}]);

appRoute.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when("/", {
            redirectTo : "/"
        })
	.when("/people", {
            templateUrl : "route/people.html",
            controller : "peopleController"
        })
    .when("/planet", {
            templateUrl : "route/planet.html",
            controller : "planetController"
        })
    .when("/spaceship", {
            templateUrl : "route/spaceship.html",
            controller : "spaceshipController"
        })
    .when("/vehicle", {
            templateUrl : "route/vehicle.html",
            controller : "vehicleController"
        })
	;
}]);

appRoute.controller("peopleController",['$scope',function ($scope){
	// appShareObj.setTabActive('people');
}]);

appRoute.controller("planetController",['$scope',function ($scope){
    // appShareObj.setTabActive('people');
}]);
appRoute.controller("spaceshipController",['$scope',function ($scope){
    // appShareObj.setTabActive('people');
}]);
appRoute.controller("vehicleController",['$scope',function ($scope){
    // appShareObj.setTabActive('people');
}]);