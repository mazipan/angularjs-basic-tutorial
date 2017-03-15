/**
 * Created by irfan.maulana
 */
var irfanCtrl = angular.module('irfan.basic.controller',[]);

irfanCtrl.controller('irfan.ctrl', ['$scope', 'irfanShareObject', irfanCtrlFunc]);

function irfanCtrlFunc($scope, irfanShareObject){
    $scope.firstName = "Irfan";
    $scope.lastName = "Maulana";
    
    $scope.syncData = function(){
		$scope.fullName = $scope.firstName + " " + $scope.lastName;
    	
        irfanShareObject.setFirstName($scope.firstName);
        irfanShareObject.setLastName($scope.lastName);
        irfanShareObject.setFullName($scope.fullName);
    };
}

