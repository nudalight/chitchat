angular
  .module('chitchat')
  .controller('mainController', mainController)
;

mainController
  .$inject = ['$rootScope', '$scope', 'locker']
;

function mainController($rootScope, $scope, locker){
  
  var vm = this;

  $scope.test = 'TESTSTRING';

  console.warn('main controller loaded');

}
