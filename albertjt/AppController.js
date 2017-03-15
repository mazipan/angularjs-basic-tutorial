var c = angular.module('controller.core',[]);

c.controller('CoreController', function ($scope, $http){ 
  $scope.getName = function () {
    $scope.fullName = $scope.firstName + " " + $scope.lastName;
  }

  $scope.getPostData = function () {
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .then( function(response) {
      // console.log(response.data);
      // console.log(sharedObject);
      $scope.data = response.data;
    });
  }

  $scope.getCommentData = function () {
    $http.get("https://jsonplaceholder.typicode.com/comments")
    .then( function(response) {
      // console.log(response.data);
      // console.log(sharedObject);
      $scope.data = response.data;
    });
  }

  $scope.getAlbumData = function () {
    $http.get("https://jsonplaceholder.typicode.com/albums")
    .then( function(response) {
      // console.log(response.data);
      // console.log(sharedObject);
      $scope.data = response.data;
    });
  }

  $scope.getToDoData = function () {
    $http.get("https://jsonplaceholder.typicode.com/todos")
    .then( function(response) {
      // console.log(response.data);
      // console.log(sharedObject);
      $scope.data = response.data;
    });
  }

  $scope.getUserData = function () {
    $http.get("https://jsonplaceholder.typicode.com/users")
    .then( function(response) {
      // console.log(response.data);
      // console.log(sharedObject);
      $scope.data = response.data;
    });
  }
});