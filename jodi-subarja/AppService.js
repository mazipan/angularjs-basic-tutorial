var service = angular.module('serviceApp', []);
service.factory('shareObj', [serviceShareObj]);

function serviceShareObj() {
    var tabActive= "People";

    return {
        setTabActive: function(name) {            
            if(typeof name !== 'undefined') tabActive = name;
            return tabActive;
        },
        getTabActive: function(){
            return tabActive;
        }
    };
}
