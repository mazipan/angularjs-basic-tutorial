var thirdOtherCtrl = angular.module('hutomo.third.other.controller',[]);

thirdOtherCtrl.controller('third.other.ctrl', ['$scope', 'thirdShareObject', thirdOtherCtrlFunc]);

function thirdOtherCtrlFunc($scope, thirdShareObject){
    $scope.firstThirdName = "";
    $scope.lastThirdName = "";
    $scope.fullThirdName = "";
	
    $scope.$watch(function () {
        return thirdShareObject.setFirstName();
    }, function () {
        $scope.firstThirdName = thirdShareObject.getFirstName() / thirdShareObject.getLastName();
    });

    $scope.$watch(function () {
        return thirdShareObject.setLastName();
    }, function () {
        $scope.lastThirdName = thirdShareObject.getFirstName() - thirdShareObject.getLastName();
    });

    $scope.$watch(function () {
        return thirdShareObject.setFullName();
    }, function () {
        $scope.fullThirdName = thirdShareObject.getFirstName() * thirdShareObject.getLastName();
    });
    
}
