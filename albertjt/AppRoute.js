var r = angular.module('route.core', ["ngRoute"]);

r.run(['$route', function($route)  {
    $route.reload();
}]);

r.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/", {
            redirectTo: ''
        })
        .when("/get", {
            templateUrl : "get.html",
        })
        .when("/post", {
            templateUrl : "post.html",
        }) 
        .otherwise({
            template : "<h1>Cannot found routing</h1> <p>Nothing has been selected</p>"
        });
        
}]);