/*
 * @author : irfan.maulana
 */
var irfanServices = angular.module('irfan.basic.service', []);
irfanServices.factory('irfanShareObject', [irfanServicesFunction]);

function irfanServicesFunction() {
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
