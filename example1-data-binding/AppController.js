/**
 * Created by irfan.maulana
 */
var irfanCtrl = angular.module('irfan.basic.controller',[]);

irfanCtrl.controller('irfan.ctrl', ['$scope', irfanCtrlFunc]);

function irfanCtrlFunc($scope){
    $scope.firstName = "Irfan";
    $scope.lastName = "Maulana";
    $scope.seeFullName = function(){
        $scope.fullName = $scope.firstName + " " + $scope.lastName;
    };
}

