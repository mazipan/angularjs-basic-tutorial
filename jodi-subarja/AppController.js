/**
 * Created by Jodi on 3/14/2017.
 */
var cltrApp = angular.module('ControllerApp',[]);

cltrApp.controller('cltr.App',['$scope','$http',CtrlFunctionFirst,'shareObj']);

function CtrlFunctionFirst($scope,$http,shareObj) {
    $scope.fetchDataPeople = function () {
        $http.get("https://swapi.co/api/people/").then(
	        function (response) {
	        	console.log('response',response);
	            $scope.data = response.data;
	      	});
    	}
    $scope.fetchDataVehicle = function(){
    	$http.get("https://swapi.co/api/vehicles/").then(
	        function (response) {
	        	console.log('response',response);
	            $scope.data = response.data;
	      	});
    	}

    $scope.$watch(function () {
        return shareObj.setTabActive();
    }, function () {
        $scope.tabActive = shareObj.getTabActive();
    });

}