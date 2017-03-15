/*
 * @author : kevin kurniawan
 */
var informationRoute = angular.module('starwars.route', ["ngRoute"]);

informationRoute.run(['$route', function($route)  {
    $route.reload();
}]);

informationRoute.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        .when("/", {
            redirectTo: 'planet'
        })
        .when("/planet", {
            templateUrl : "../view/route/planets.html",
            controller : "planet.controller"
        })
        .when("/spaceship", {
            templateUrl : "../view/route/spaceships.html",
            controller : "spaceship.controller"
        })
        .when("/people", {
            templateUrl : "../view/route/peoples.html",
            controller : "people.controller"
        })
        .when("/film", {
            templateUrl : "../view/route/films.html",
            controller : "film.controller"
        })
        .when("/species", {
            templateUrl : "../view/route/species.html",
            controller : "species.controller"
        })
        .when("/vehicle", {
            templateUrl : "../view/route/vehicles.html",
            controller : "vehicle.controller"
        })
        .otherwise({
            template : "<h1>Cannot found routing</h1> <p>Nothing has been selected</p>"
        });
        
}]);

informationRoute.controller("planet.controller", ['$scope', 'sharingObject', 
    function ($scope, sharingObject) {
        sharingObject.setTabActive('planet');
    }
]);

informationRoute.controller("spaceship.controller", ['$scope', 'sharingObject', 
    function ($scope, sharingObject) {
        sharingObject.setTabActive('spaceship');
    }
]);

informationRoute.controller("people.controller", ['$scope', 'sharingObject', 
    function ($scope, sharingObject) {
        sharingObject.setTabActive('people');
    }
]);

informationRoute.controller("film.controller", ['$scope', 'sharingObject', 
    function ($scope, sharingObject) {
        sharingObject.setTabActive('film');
    }
]);

informationRoute.controller("species.controller", ['$scope', 'sharingObject', 
    function ($scope, sharingObject) {
        sharingObject.setTabActive('species');
    }
]);

informationRoute.controller("vehicle.controller", ['$scope', 'sharingObject', 
    function ($scope, sharingObject) {
        sharingObject.setTabActive('vehicle');
    }
]);
