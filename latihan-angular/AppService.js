var mainServices = angular.module('main.service', []);
mainServices.factory('ShareObject', [mainServicesFunction]);

function mainServicesFunction() {
    var tabActive= "people";

    return {
        setTabActive: function(name) {            
            if(typeof name !== 'undefined') tabActive = name;

            return tabActive;
        },
        getTabActive: function() {
            return tabActive;
        }
    };
}
