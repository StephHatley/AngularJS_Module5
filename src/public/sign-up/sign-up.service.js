(function(){
'use strict';

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.inject = ['$http', 'ApiPath']
function SignUpService($http, ApiPath) {
var service = this;

var listOfUsers = [];

service.GetMenuItem = function(selection) {
  return $http.get(ApiPath + '/menu_items/'+ selection +'.json').then(function (response) {
    console.log(response);
    return response.data;
  });

};

service.AddUser = function(name, email, phone, selection){


}


};





})();
