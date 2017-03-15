var c = angular.module('controller.core',[]);

c.controller('CoreController', function ($scope, $http){ 
  $scope.getName = function () {
    $scope.fullName = $scope.firstName + " " + $scope.lastName;
  }

  $scope.getData = function () {
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .then( function(response) {
      // console.log(response.data);
      // console.log(sharedObject);
      $scope.data = response.data;
    });
  }
});