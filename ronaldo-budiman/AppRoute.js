var ronRoute = angular.module('ron.basic.route', ["ngRoute"]);

ronRoute.run(['$route', function($route)  {
    $route.reload();
}]);

ronRoute.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        .when("/", {
            redirectTo: 'planets'
        })
        .when("/planets", {
            templateUrl : "planets.html",
            controller : "planetsCtrl"
        })
        .when("/spaceships", {
            templateUrl : "spaceships.html",
            controller : "spaceshipsCtrl"
        })
        .when("/vehicles", {
            templateUrl : "vehicles.html",
            controller : "vehiclesCtrl"
        })
        .when("/people", {
            templateUrl : "people.html",
            controller : "peopleCtrl"
        })
        .when("/species", {
            templateUrl : "species.html",
            controller : "speciesCtrl"
        })
        .otherwise({
            template : "<h1>Cannot found routing</h1> <p>Nothing has been selected</p>"
        });
        
}]);

ronRoute.controller("planetsCtrl", ['$scope', 'ronShareObject', 
    function ($scope, ronShareObject) {
        ronShareObject.setTabActive('planets');
    }
]);

ronRoute.controller("spaceshipsCtrl", ['$scope', 'ronShareObject', 
    function ($scope, ronShareObject) {
        ronShareObject.setTabActive('spaceships');
    }
]);

ronRoute.controller("vehiclesCtrl", ['$scope', 'ronShareObject', 
    function ($scope, ronShareObject) {
        ronShareObject.setTabActive('vehicles');
    }
]);

ronRoute.controller("peopleCtrl", ['$scope', 'ronShareObject', 
    function ($scope, ronShareObject) {
        ronShareObject.setTabActive('people');
    }
]);

ronRoute.controller("speciesCtrl", ['$scope', 'ronShareObject', 
    function ($scope, ronShareObject) {
        ronShareObject.setTabActive('species');
    }
]);