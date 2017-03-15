/*
 * @author : jevon.averill
 */
var jevonRoute = angular.module('jevon.basic.route', ["ngRoute"]);

jevonRoute.run(['$route', function($route)  {
    $route.reload();
}]);

jevonRoute.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        // .when("/", {
        //     redirectTo: 'test'
        // })
        // .when("/test", {
        //     templateUrl : "route/test.html"
        // })
        .when("/", {
            redirectTo: 'planets'
        })
        .when("/planets", {
            templateUrl : "route/planets.html",
            controller : "planetsController"
        })
        .when("/starships", {
            templateUrl : "route/starships.html",
            controller : "starshipsController"
        })
        .when("/vehicles", {
            templateUrl : "route/vehicles.html",
            controller : "vehiclesController"
        })
        .when("/people", {
            templateUrl : "route/people.html",
            controller : "peopleController"
        })
        .when("/films", {
            templateUrl : "route/films.html",
            controller : "filmsController"
        })
        .when("/species", {
            templateUrl : "route/species.html",
            controller : "speciesController"
        })
        .otherwise({
            template : "<h1>Cannot found routing</h1><p>Nothing has been selected</p>"
        });
        
}]);

jevonRoute.controller("planetsController", ['$scope', 'jevonShareObject', 
    function ($scope, jevonShareObject) {
        jevonShareObject.setTabActive('planets');
    }
]);

jevonRoute.controller("starshipsController", ['$scope', 'jevonShareObject', 
    function ($scope, jevonShareObject) {
        jevonShareObject.setTabActive('starships');
    }
]);

jevonRoute.controller("vehiclesController", ['$scope', 'jevonShareObject', 
    function ($scope, jevonShareObject) {
        jevonShareObject.setTabActive('vehicles');
    }
]);

jevonRoute.controller("peopleController", ['$scope', 'jevonShareObject', 
    function ($scope, jevonShareObject) {
        jevonShareObject.setTabActive('people');
    }
]);

jevonRoute.controller("filmsController", ['$scope', 'jevonShareObject', 
    function ($scope, jevonShareObject) {
        jevonShareObject.setTabActive('films');
    }
]);

jevonRoute.controller("speciesController", ['$scope', 'jevonShareObject', 
    function ($scope, jevonShareObject) {
        jevonShareObject.setTabActive('species');
    }
]);