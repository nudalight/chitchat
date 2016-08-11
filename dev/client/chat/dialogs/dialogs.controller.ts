angular
  .module('chitchat')
  .controller('dialogsController', dialogsController)
;

dialogsController
  .$inject = ['$rootScope', '$scope', 'QBService', 'locker']
;

function dialogsController($rootScope, $scope, QBService, locker){

  let vm = this;

  vm.startDialog = function(id){
    QBService.startOneToOneDialog(id, function(err, res){
      console.log(2, 'DIALOG CALLBACK', err, res, res._id);


      var startedDialogData = {
        id: res._id,
        opponentId: res.occupants_ids[1],
      };

      $scope.$apply(function(){
        vm.currentDialog = startedDialogData;

      });

      $rootScope.$broadcast('QB:DIALOG-STARTED', startedDialogData);
    })
  };


  $rootScope.$on('QB:READY', (event, data) => {

    QBService.getDialogs({}, (err, result) => {

      // if (err) throw err;

      console.log('DIALOGS:', result, err);

      $scope.$apply(function () {
        vm.dialogs = result;
        vm.myId = locker.get('user-id');

        console.log('TEST', locker.get('user-id'));
      });



      console.log('CONTROLLER', result);
    });




    QB.chat.connect({userId: 15936143, password: 12345678}, function(err, roster) {});






  });


}