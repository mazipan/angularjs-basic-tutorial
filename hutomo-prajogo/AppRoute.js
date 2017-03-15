var hutomoRoute = angular.module('hutomo.basic.route', ["ngRoute"]);

hutomoRoute.run(['$route', function($route)  {
    // kalo reload maka dia akan cari yang sebelumnya dipilih
    $route.reload();
}]);

hutomoRoute.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        .when("/", {
            redirectTo: 'red'
        })
        .when("/red", {
            templateUrl : "route/red.html",
            controller : "first.ctrl"
        })
        .when("/green", {
            templateUrl : "route/green.html",
            controller : "second.ctrl"
        })
        .when("/blue", {
            templateUrl : "route/blue.html",
            controller : "third.ctrl"
        })
        .otherwise({
            template : "<h1>Cannot found routing</h1> <p>Nothing has been selected</p>"
        });
        
}]);





