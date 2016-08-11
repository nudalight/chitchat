angular
  .module('chitchat')
  .controller('historyController', historyController)
;

historyController
  .$inject = ['$rootScope', '$scope', 'QBService']
;

function historyController($rootScope, $scope, QBService){

  var vm = this;

  vm.manipulate = {};
  vm.manipulate.formatDate = formatDate;

  $rootScope.$on('QB:DIALOG-STARTED', function(event, dialogData){

    var dialogId = dialogData.id;

    QBService.getDialogHistory(dialogId, function(err, res){

      console.log('HISTORY:', err, res);
      $scope.$apply(function(){
        vm.messages = res.items;
      });

    });

  });


  function formatDate(ts){
    console.log('TIMESTAMP', ts);
    moment(ts).format('DD MMM, YYYY');
    return moment(ts).format('X');
  }


}