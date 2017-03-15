var dikoRoute = angular.module('diko.basic.route', ["ngRoute"]);

dikoRoute.run(['$route', function($route)  {
    $route.reload();
}]);

dikoRoute.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        .when("/", {
            redirectTo: 'planets'
        })
        .when("/planets", {
            templateUrl : "Routes/Planets.html",
            controller : "planetsCtrl"
        })
        .when("/spaceships", {
            templateUrl : "Routes/spaceships.html",
            controller : "spaceshipsCtrl"
        })
        .when("/vehicles", {
            templateUrl : "Routes/vehicles.html",
            controller : "vehiclesCtrl"
        })
        .when("/people", {
            templateUrl : "Routes/people.html",
            controller : "peopleCtrl"
        })
        .when("/species", {
            templateUrl : "Routes/species.html",
            controller : "speciesCtrl"
        })
        .otherwise({
            template : "<h1>Cannot found routing</h1> <p>Nothing has been selected</p>"
        });
        
}]);

dikoRoute.controller("planetsCtrl", ['$scope', 'dikoShareObject',
    function ($scope, dikoShareObject) {
        dikoShareObject.setTabActive('planets');
    }
]);

dikoRoute.controller("vehiclesCtrl", ['$scope', 'dikoShareObject',
    function ($scope, dikoShareObject) {
        dikoShareObject.setTabActive('vehicles');
    }
]);

dikoRoute.controller("spaceshipsCtrl", ['$scope', 'dikoShareObject',
    function ($scope, dikoShareObject) {
        dikoShareObject.setTabActive('spaceships');
    }
]);

dikoRoute.controller("speciesCtrl", ['$scope', 'dikoShareObject',
    function ($scope, dikoShareObject) {
        dikoShareObject.setTabActive('species');
    }
]);

dikoRoute.controller("peopleCtrl", ['$scope', 'dikoShareObject',
    function ($scope, dikoShareObject) {
        dikoShareObject.setTabActive('people');
    }
]);

