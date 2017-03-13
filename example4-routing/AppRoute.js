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
            templateUrl : "route/red.html",
            controller : "redCtrl"
        })
        .when("/green", {
            templateUrl : "route/green.html",
            controller : "greenCtrl"
        })
        .when("/blue", {
            templateUrl : "route/blue.html",
            controller : "blueCtrl"
        })
        .otherwise({
            template : "<h1>Cannot found routing</h1> <p>Nothing has been selected</p>"
        });
        
}]);

irfanRoute.controller("redCtrl", ['$scope', 'irfanShareObject', 
    function ($scope, irfanShareObject) {
        irfanShareObject.setTabActive('red');
    }
]);

irfanRoute.controller("greenCtrl", ['$scope', 'irfanShareObject', 
    function ($scope, irfanShareObject) {
        irfanShareObject.setTabActive('green');
    }
]);

irfanRoute.controller("blueCtrl", ['$scope', 'irfanShareObject', 
    function ($scope, irfanShareObject) {
        irfanShareObject.setTabActive('blue');
    }
]);