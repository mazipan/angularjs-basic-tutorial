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
            redirectTo: 'planets'
        })
        .when("/planets", {
            templateUrl : "view.html",
            controller : "planetsCtrl"
        })
        .when("/spaceships", {
            templateUrl : "view.html",
            controller : "spaceshipsCtrl"
        })
        .when("/vehicles", {
            templateUrl : "view.html",
            controller : "vehiclesCtrl"
        })
        .otherwise({
            template : "<h1>Cannot found routing</h1> <p>Nothing has been selected</p>"
        });

}]);

irfanRoute.controller("planetsCtrl", ['$scope', 'irfanShareObject',
    function ($scope, irfanShareObject) {
        irfanShareObject.setTabActive('planets');
    }
]);

irfanRoute.controller("spaceshipsCtrl", ['$scope', 'irfanShareObject',
    function ($scope, irfanShareObject) {
        irfanShareObject.setTabActive('spaceships');
    }
]);

irfanRoute.controller("vehiclesCtrl", ['$scope', 'irfanShareObject',
    function ($scope, irfanShareObject) {
        irfanShareObject.setTabActive('vehicles');
    }
]);