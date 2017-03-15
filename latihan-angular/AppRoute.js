var mainRoute = angular.module('main.route', ["ngRoute"]);

mainRoute.run(['$route', function($route)  {
    $route.reload();
}]);

mainRoute.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        .when("/", {
            redirectTo: 'people'
        })
        .when("/people", {
            templateUrl : "route/people.html",
            controller : "peopleCtrl"
        })
        .when("/planets", {
            templateUrl : "route/planets.html",
            controller : "planetsCtrl"
        })
        .when("/films", {
            templateUrl : "route/films.html",
            controller : "filmsCtrl"
        })
        .when("/species", {
            templateUrl : "route/species.html",
            controller : "speciesCtrl"
        })
        .when("/vehicles", {
            templateUrl : "route/vehicles.html",
            controller : "vehiclesCtrl"
        })
        .when("/starships", {
            templateUrl : "route/starships.html",
            controller : "starshipsCtrl"
        })
        .otherwise({
            template : "<h1>Cannot found routing</h1> <p>Nothing has been selected</p>"
        });
        
}]);

mainRoute.controller("peopleCtrl", ['$scope', 'ShareObject', 
    function ($scope, ShareObject) {
        ShareObject.setTabActive('people');
    }
]);

mainRoute.controller("planetsCtrl", ['$scope', 'ShareObject', 
    function ($scope, ShareObject) {
        ShareObject.setTabActive('planets');
    }
]);

mainRoute.controller("filmsCtrl", ['$scope', 'ShareObject', 
    function ($scope, ShareObject) {
        ShareObject.setTabActive('films');
    }
]);

mainRoute.controller("speciesCtrl", ['$scope', 'ShareObject', 
    function ($scope, ShareObject) {
        ShareObject.setTabActive('species');
    }
]);

mainRoute.controller("vehiclesCtrl", ['$scope', 'ShareObject', 
    function ($scope, ShareObject) {
        ShareObject.setTabActive('vehicles');
    }
]);

mainRoute.controller("starshipsCtrl", ['$scope', 'ShareObject', 
    function ($scope, ShareObject) {
        ShareObject.setTabActive('starships');
    }
]);