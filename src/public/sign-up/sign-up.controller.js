(function() {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http','ApiPath'];
function SignUpController($http, ApiPath) {
  var $ctrl = this;

  var doesNotExist = false;
  var successful = false;

  $ctrl.checkItem = function() {
    return doesNotExist;
  };

  $ctrl.checkSuccess = function() {
    return successful;
  };


  $ctrl.submit = function(selection) {
    $http({
      method: 'GET',
      url: ApiPath + '/menu_items/'+ selection +'.json'
    }).then(function successCallback(response){
      console.log(response.data);
      doesNotExist = false;
      successful = true;
    }, function errorCallback(response){
      doesNotExist = true;
      successful = false;
      console.log("menu item not found");
    });

    $ctrl.completed = true;
  };
}

})();
