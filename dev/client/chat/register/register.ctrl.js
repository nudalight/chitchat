angular
  .module('chitchat')
  .controller('registerCtrl', registerCtrl)
;

registerCtrl
  .$inject = ['$rootScope', '$scope', 'authService', '$log', 'trianglifyService']
;

function registerCtrl($rootScope, $scope, authService, $log, trianglifyService){

  var vm = this;

  vm.test = 'test string1';

  vm.state = {
    step: 1
  };

  vm.form = {};
  vm.errors = {};
  vm.actions = {
    nextStep: function(){
      vm.step = 2;
      console.log(vm.form)
    }
  };

  // $scope.$on('$viewContentLoaded', function(){
  //   trianglifyService.generateTo('.register');
  // });


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
