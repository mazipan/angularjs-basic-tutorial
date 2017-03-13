/*
 * @author : irfan.maulana
 */
var irfanRoute = angular.module('irfan.basic.route', ["ngRoute"]);

irfanRoute.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        .when("/", {
            templateUrl : "route/main.html"
        })
        .when("/red", {
            templateUrl : "route/red.html"
        })
        .when("/green", {
            templateUrl : "route/green.html"
        })
        .when("/blue", {
            templateUrl : "route/blue.html"
        });
        
}]);