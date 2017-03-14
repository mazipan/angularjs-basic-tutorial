var routeFunc = angular.module('routeApp', ["ngRoute"]);

routeFunc.run(['$route', function($route)  {
    $route.reload();
}]);

routeFunc.config(['$routeProvider', function($routeProvider) {
	$routeProvider
        .when("/", {
            redirectTo: 'People'
        }).when("/People", {
            templateUrl : "People.html",
            controller : "peopleCtrl"
        }).when("/Vehicle", {
            templateUrl : "Vehicle.html",
            controller : "vehicleCtrl"
        }).otherwise({
            template : "<h1>Nothing has been Found</h1>"
        });
}]);

routeFunc.controller("peopleCtrl", ['$scope', 'shareObj', 
    function ($scope, shareObj) {
        shareObj.setTabActive('People');
    }
]);

routeFunc.controller("vehiclesCtrl", ['$scope', 'shareObj', 
    function ($scope, shareObj) {
        shareObj.setTabActive('Vehicles');
    }
]);