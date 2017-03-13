/*
 * @author : irfan.maulana
 */
var irfanRoute = angular.module('irfan.basic.route', ["ngRoute"]);

irfanRoute.run(['$route', function($route)  {
    $route.reload();
}]);

irfanRoute.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        .when("/", {
            redirectTo: 'red'
        })
        .when("/red", {
            templateUrl : "route/red.html"
        })
        .when("/green", {
            templateUrl : "route/green.html"
        })
        .when("/blue", {
            templateUrl : "route/blue.html"
        })
        .otherwise({
            template : "<h1>Cannot found routing</h1> <p>Nothing has been selected</p>"
        });
        
}]);