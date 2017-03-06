(function() {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http','ApiPath', 'SignUpService'];
function SignUpController($http, ApiPath, SignUpService) {
  var $ctrl = this;

  var doesNotExist = false;
  var successful = false;

  $ctrl.checkItem = function() {
    return doesNotExist;
  };

  $ctrl.checkSuccess = function() {
    return successful;
  };


  $ctrl.submit = function(user) {
    console.log(user);
    $http({
      method: 'GET',
      url: ApiPath + '/menu_items/'+ user.menuItemSelection.short_name +'.json'
    }).then(function successCallback(response){
      console.log(response.data);
      doesNotExist = false;
      successful = true;
      user.menuItemSelection = response.data;
      console.log(user);
      SignUpService.AddUser(user);
    }, function errorCallback(response){
      doesNotExist = true;
      successful = false;
      console.log("menu item not found");
    });

    $ctrl.completed = true;
  };
}

})();
