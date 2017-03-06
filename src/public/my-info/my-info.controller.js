(function(){
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$http', 'ApiPath', 'currentUser'];
function MyInfoController($http, ApiPath, currentUser){
  var $ctrl = this;

  $ctrl.currentUser = currentUser;
  $ctrl.basePath = ApiPath;
  console.log($ctrl.currentUser);
  $ctrl.checkUser = function(){
    if ($ctrl.currentUser != null) {
      return true;
    } else {
      return false;
    }
  }

};

})();
