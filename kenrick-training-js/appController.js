var appController = angular.module('project-controller',[]);

appController.controller('project-ctrl',['$scope','$http',ctrlFunction]);

function ctrlFunction($scope,$http){
	$scope.fetchDataPeople = function(){
		$http.get("https://swapi.co/api/people/")
		.then(function (response){
			console.log(response);
			$scope.data = response.data;
		});
	}

	$scope.fetchDataPlanet = function(){
		$http.get("https://swapi.co/api/planets/")
		.then(function (response){
			console.log(response);
			$scope.data = response.data;
		});
	}

	$scope.fetchDataSpaceship = function(){
		$http.get("https://swapi.co/api/starships/")
		.then(function (response){
			console.log(response);
			$scope.data = response.data;
		});
	}

	$scope.fetchDataVehicle = function(){
		$http.get("https://swapi.co/api/vehicles/")
		.then(function (response){
			console.log(response);
			$scope.data = response.data;
		});
	}

	// $scope.$watch(function () {
 //        return appShareObj.setTabActive();
 //    }, function () {
 //        $scope.tabActive = appShareObj.getTabActive();
 //    });
}
