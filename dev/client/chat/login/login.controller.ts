angular
  .module('chitchat')
  .controller('loginController', loginController)
;

loginController
  .$inject = ['$rootScope', '$scope', 'authService', '$log', 'trianglifyService']
;

function loginController($rootScope, $scope, authService, $log, trianglifyService){

  var vm = this;
  
  vm.test = 'test string1';

  vm.form = {};
  vm.errors = {};
  vm.actions = {
    login: login
  };

  $scope.$on('$viewContentLoaded', function(){
    trianglifyService.generateTo('.login');
  });

  function login(){
    $log.log('login attempt');
    authService.login(vm.form.login, vm.form.password);

  }


  $rootScope.$on('QB:LOGINFAILED', function(){

    $scope.$apply(function(){
      console.log('noooooooooooooO!');
      vm.errors.form = 'Wrong password or login name';
    });

  });

}