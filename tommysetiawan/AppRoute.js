var tommyRoute = angular.module('tommy.basic.route', ["ngRoute"]);

tommyRoute.run(['$route', function($route)  {
    $route.reload();
}]);

tommyRoute.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        .when("/", {
            redirectTo: 'planets'
        })
        .when("/spaceships", {
            templateUrl : "spaceships.html",
            controller : "spaceshipsCtrl"
        })
        .when("/vehicles", {
            templateUrl : "vehicles.html",
            controller : "vehiclesCtrl"
        })
        .when("/species", {
            templateUrl : "species.html",
            controller : "speciesCtrl"
        })
        .when("/planets", {
            templateUrl : "planets.html",
            controller : "planetsCtrl"
        })
        .when("/people", {
            templateUrl : "people.html",
            controller : "peopleCtrl"
        })
        
        .otherwise({
            template : "<h1>Cannot found routing</h1> <p>Nothing has been selected</p>"
        });
        
}]);

tommyRoute.controller("planetsCtrl", ['$scope', 'tommyShareObject', 
    function ($scope, tommyShareObject) {
        tommyShareObject.setTabActive('planets');
    }
]);

tommyRoute.controller("spaceshipsCtrl", ['$scope', 'tommyShareObject', 
    function ($scope, tommyShareObject) {
        tommyShareObject.setTabActive('spaceships');
    }
]);

tommyRoute.controller("vehiclesCtrl", ['$scope', 'tommyShareObject', 
    function ($scope, tommyShareObject) {
        tommyShareObject.setTabActive('vehicles');
    }
]);

tommyRoute.controller("peopleCtrl", ['$scope', 'tommyShareObject', 
    function ($scope, tommyShareObject) {
        tommyShareObject.setTabActive('people');
    }
]);

tommyRoute.controller("speciesCtrl", ['$scope', 'tommyShareObject', 
    function ($scope, tommyShareObject) {
        tommyShareObject.setTabActive('species');
    }
]);