var tommyServices = angular.module('tommy.basic.service', []);
tommyServices.factory('tommyShareObject', [tommyServicesFunction]);

function tommyServicesFunction() {
    var tabActive= "planets";

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
