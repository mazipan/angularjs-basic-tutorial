var secondCtrl = angular.module('hutomo.second.controller',[]);
secondCtrl.controller('second.ctrl', ['$scope', 'hutomoShareObject', secondCtrlFunc]);
function secondCtrlFunc($scope, hutomoShareObject){

	hutomoShareObject.setTabActive('green');
	$scope.firstName = "";
    $scope.lastName = "";
    $scope.seeFullName = function(){
        $scope.fullNameF = "Your Name Is " + $scope.firstName + " " + $scope.lastName;
    };
}
