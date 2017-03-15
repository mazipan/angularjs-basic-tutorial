var thirdCtrl = angular.module('third.basic.controller',[]);

thirdCtrl.controller('third.ctrl', ['$scope', 'thirdShareObject', thirdCtrlFunc]);

function thirdCtrlFunc($scope, thirdShareObject){
    $scope.firstThirdName = "";
    $scope.lastThirdName = "";

    $scope.syncData = function(){
        $scope.fullThirdName = $scope.firstThirdName + " dan " + $scope.lastThirdName;

        thirdShareObject.setFirstName($scope.firstThirdName);
        thirdShareObject.setLastName($scope.lastThirdName);
        thirdShareObject.setFullName($scope.fullThirdName);
    };
}

