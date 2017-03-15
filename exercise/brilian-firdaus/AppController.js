/**
 * Created by irfan.maulana
 */
var irfanCtrl = angular.module('irfan.basic.controller',[]);

irfanCtrl.controller('irfan.ctrl', ['$scope', 'irfanShareObject', '$http', irfanCtrlFunc]);


function irfanCtrlFunc($scope, irfanShareObject, $http){

    $scope.$watch(function () {
        return irfanShareObject.setTabActive();
    }, function () {
        $scope.tabActive = irfanShareObject.getTabActive();
        if($scope.tabActive === 'planets') {
            $scope.spaceshipsData = "empty";
            $scope.vehiclesData = "empty";
            $http.get("https://swapi.co/api/planets/")
                .then(function (response) {
                    console.log('response : ', response);
                    if($scope.tabActive === 'planets')
                        $scope.planetsData = response.data;
                });
        }else if($scope.tabActive === 'spaceships'){
            $scope.planetsData = "empty";
            $scope.vehiclesData = "empty";
            $http.get("https://swapi.co/api/starships/")
                .then(function (response) {
                    console.log('response : ', response);
                    if($scope.tabActive === 'spaceships')
                        $scope.spaceshipsData = response.data;
                });
        }else if($scope.tabActive === 'vehicles'){
            $scope.planetsData = "empty";
            $scope.spaceshipsData = "empty";
            $http.get("https://swapi.co/api/vehicles/")
                .then(function (response) {
                    console.log('response : ', response);
                    if($scope.tabActive === 'vehicles')
                        $scope.vehiclesData = response.data;
                });
        }else{
            $scope.planetsData = "empty";
            $scope.vehiclesData = "empty";
            $scope.spaceshipsData = "empty";
        }

    });

}
