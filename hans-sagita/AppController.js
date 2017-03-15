/**
 * Created by hans sagita
 */
var hsCtrl = angular.module('hs.basic.controller',[]);

hsCtrl.controller('hs.ctrl', ['$scope', '$http', hsCtrlFunc]);

function hsCtrlFunc($scope, $http){

    $scope.fetchData = function() {
        $http.get( "https://swapi.co/api/films/")
        .then( function(response) {
        	console.log('response : ', response);
            $scope.data = response.data;
        });
    }
    $scope.fetchDataplanets = function() {
        $http.get( "https://swapi.co/api/planets/")
        .then( function(response) {
        	console.log('response : ', response);
            $scope.data = response.data;
        });
    }
    $scope.fetchDatapeople = function() {
        $http.get( "https://swapi.co/api/people/")
        .then( function(response) {
            console.log('response : ', response);
            $scope.data = response.data;
        });
    }
}

