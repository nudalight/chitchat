angular
  .module('chitchat')
  .controller('messageInputController', messageInputController)
;

messageInputController
  .$inject = ['$rootScope', '$scope', 'QBService']
;

function messageInputController($rootScope, $scope, QBService){

  var vm = this;

  vm.currentDialog = {};
  vm.sendMessage = sendMessage;


  $rootScope.$on('QB:DIALOG-STARTED', function(event, dialogData){

    $scope.$apply(function(){
      vm.currentDialog = dialogData;
    });

  });
  
  function sendMessage(){
    QBService.sendMessage(vm.currentDialog.opponentId, vm.messageText);
  }





} 