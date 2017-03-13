/*
 * @author : irfan.maulana
 */
var irfanServices = angular.module('irfan.basic.service', []);
irfanServices.factory('irfanShareObject', [irfanServicesFunction]);

function irfanServicesFunction() {

    var firstName= "", 
        lastName= "", 
        fullName= "";

    return {
        setFirstName: function(name) {            
            if(typeof name !== 'undefined') firstName = name;

            return firstName;
        },
        getFirstName: function() {
            return firstName;
        },
        setLastName: function(name) {
            if(typeof name !== 'undefined') lastName = name;

            return lastName;
        },
        getLastName: function() {
            return lastName;
        },
        setFullName: function(name) {
            if(typeof name !== 'undefined' && name !== '') fullName = name;

            return fullName;
        },
        getFullName: function() {

            return fullName;
        }
    };
}
