/**
 * Created by irfan.maulana
 */
var irfanCtrl = angular.module('irfan.basic.controller',[]);

irfanCtrl.controller('irfan.ctrl', ['$scope', 'irfanShareObject', irfanCtrlFunc]);

function irfanCtrlFunc($scope, irfanShareObject){

	$scope.$watch(function () {
        return irfanShareObject.setTabActive();
    }, function () {
        $scope.tabActive = irfanShareObject.getTabActive();
    });

}

