/*
 * @author : jevon.averill
 */
var jevonServices = angular.module('jevon.basic.service', []);
jevonServices.factory('jevonShareObject', [jevonServicesFunction]);

function jevonServicesFunction() {
    var tabActive = "test";

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
