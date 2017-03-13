/**
 * Created by irfan.maulana
 */
var irfanCtrl = angular.module('irfan.basic.controller',[]);

irfanCtrl.controller('irfan.ctrl', ['$scope', '$http', irfanCtrlFunc]);

function irfanCtrlFunc($scope, $http){

    $scope.fetchData = function() {
        $http.get( "https://swapi.co/api/films/")
        .then( function(response) {
        	console.log('response : ', response);
            $scope.data = response.data;
        });
    }
}

