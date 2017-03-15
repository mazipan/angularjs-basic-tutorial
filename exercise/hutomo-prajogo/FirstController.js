var firstCtrl = angular.module('hutomo.first.controller',[]);
firstCtrl.controller('first.ctrl', ['$scope', '$http', 'hutomoShareObject', firstCtrlFunc]);
function firstCtrlFunc($scope, $http, hutomoShareObject){

	hutomoShareObject.setTabActive('red');
	var url = 'http://jsonplaceholder.typicode.com/photos';

    $http.get( "https://swapi.co/api/films/")
    .then( function(response) {
    	console.log('response : ', response);
        $scope.data = response.data;
    });



}
