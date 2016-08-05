angular
  .module('chitchat')
  .controller('dialogsController', dialogsController)
;

dialogsController
  .$inject = ['$rootScope', '$scope', 'QBService', '$timeout']
;

function dialogsController($rootScope, $scope, QBService, $timeout){

  let vm = this;

  vm.test = 11111;


  $rootScope.$on('QB:READY', (event, data) => {

    QBService.getDialogs({}, (err, result) => {

      if (err) throw err;

      $scope.$apply(function () {
        vm.dialogs = result;

      });



      console.log('CONTROLLER', result);
    });

    // var x = QBService.getDialogs2({});
    // console.log('x:',x);



  });


}