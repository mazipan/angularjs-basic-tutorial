var hutomoServices = angular.module('hutomo.basic.service', []);
hutomoServices.factory('hutomoShareObject', [hutomoServicesFunction]);

function hutomoServicesFunction() {
    var tabActive= "red";

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
