/**
 * Created by irfan.maulana
 */
var irfanOtherCtrl = angular.module('irfan.basic.other.controller',[]);

irfanOtherCtrl.controller('irfan.other.ctrl', ['$scope', 'irfanShareObject', irfanOtherCtrlFunc]);

function irfanOtherCtrlFunc($scope, irfanShareObject){
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = "";
	
    $scope.$watch(function () {
        return irfanShareObject.setFirstName();
    }, function () {
        $scope.firstName = irfanShareObject.getFirstName();
    });

    $scope.$watch(function () {
        return irfanShareObject.setLastName();
    }, function () {
        $scope.lastName = irfanShareObject.getLastName();
    });

    $scope.$watch(function () {
        return irfanShareObject.setFullName();
    }, function () {
        $scope.fullName = irfanShareObject.getFullName();
    });
    
}

