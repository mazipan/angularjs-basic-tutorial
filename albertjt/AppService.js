var s = angular.module('core.service', []);
s.factory('sharedObject', [services]);

function services() {
    var getType= "";
    return {
        setGetType: function(gt) {            
            if(typeof gt !== 'undefined') getType = gt;
            return getType;
        },
        getGetType: function() {
            return getType;
        }
    };
}