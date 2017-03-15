var ronServices = angular.module('ron.basic.service', []);
ronServices.factory('ronShareObject', [ronServicesFunction]);

function ronServicesFunction() {
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
