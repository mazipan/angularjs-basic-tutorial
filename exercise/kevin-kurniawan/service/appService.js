/*
 * @author : kevin kurniawan
 */
var generalServices = angular.module('starwars.service', []);
generalServices.factory('sharingObject', [generalServicesFunction]);

function generalServicesFunction() {
    var tabActive= "planet";

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
