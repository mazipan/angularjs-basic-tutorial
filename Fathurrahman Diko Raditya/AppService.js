var dikoServices = angular.module('diko.basic.service', []);
dikoServices.factory('dikoShareObject', [dikoServicesFunction]);

function dikoServicesFunction() {
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
