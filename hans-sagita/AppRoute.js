/*
 * Created by hans sagita
 */
var hsRoute = angular.module('hs.basic.route', ["ngRoute"]);

hsRoute.run(['$route', function($route)  {
    $route.reload();
}]);

hsRoute.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        .when("/", {
            redirectTo: 'route/film.html'
        })
        .when("/film", {
            templateUrl : "route/film.html"
        })
        .when("/people", {
            templateUrl : "route/people.html"
        })
        .when("/planet", {
            templateUrl : "route/planet.html"
        })
        .otherwise({
            template : "<h1>Cannot found routing</h1> <p>Nothing has been selected</p>"
        });
        
}]);

