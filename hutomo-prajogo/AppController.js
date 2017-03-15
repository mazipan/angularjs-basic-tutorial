var hutomoCtrl = angular.module('hutomo.basic.controller',[]);

hutomoCtrl.controller('hutomo.ctrl', ['$scope', 'hutomoShareObject', hutomoCtrlFunc]);

function hutomoCtrlFunc($scope, hutomoShareObject){

	// $scope.$watch(function () {
 //        return hutomoShareObject.setTabActive();
 //    }, function () {
 //        $scope.tabActive = hutomoShareObject.getTabActive();
 //    });

}

