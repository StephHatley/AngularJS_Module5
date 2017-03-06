(function(){
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath']
function SignUpService($http, ApiPath) {
var service = this;

var listOfUsers = [];
var currentUser = null;


service.AddUser = function(newUser){
  listOfUsers.push(newUser);
  currentUser = newUser;
};

service.GetCurrentUser = function(){
  return currentUser;
};

};





})();
