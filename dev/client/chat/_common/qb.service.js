angular
  .module('chitchat')
  .service('QBService', QBService)
;

QBService
  .$inject = ['QBDefaultsFactory', '$rootScope']
;

function QBService(QBDefaultsFactory, $rootScope){

  const self = this;
  const $qb = QBDefaultsFactory;

  // methods
  self.getDialogs = getDialogs;
  self.login = login;
  self.startOneToOneDialog = startOneToOneDialog;
  self.getDialogHistory = getDialogHistory;
  self.sendMessage = sendMessage;

  function init(){
    $qb.init(
      $qb.defaults.appId,
      $qb.defaults.authKey,
      $qb.defaults.authSecret
    );

    $qb.createSession(
      {
        login: $qb.defaults.seshLogin,
        password: $qb.defaults.seshPassword
      },

      function(err, result){
        console.log('err', err);
        console.log('results', result);

        $qb.defaults.token = result.token;

        $qb.init(
          $qb.defaults.token,
          $qb.defaults.appId
        );

        $rootScope.$broadcast('QB:READY');
      }
    );

  }

  init();

  function getDialogs(opts, callback){
    $qb.users.listUsers(opts, (err, res) => {
      callback(err, res);
    });
  }


  function connectSocket(){

    $qb.chat.connect({ userId: 15936143, password: 12345678 }, function(err, roster) {

    });

  }

  function login(login, password, callback){

    console.log('login in service');
    QB.login(
      {
        login: login,
        password: password
      },
      callback
    );
  }




  function startOneToOneDialog(opponentId, callback){

    console.warn(1, 'start one to one dialog with:', opponentId);

    QB.chat.dialog.create(
      {
        type: 3,
        occupants_ids: [opponentId]
      },
      callback
    );

    // check if there is a dialog

    // T: create new

    // F: update existing

  }
  
  
  function getDialogHistory(dialogId, callback){

    var opts = {
      chat_dialog_id: dialogId,
      sort_desc: 'date_sent',
      limit: 20,
      skip: 0
    };

    console.warn('OPTS:', opts);

    QB.chat.message.list(opts, callback);
  }

  
  function sendMessage(opponentId, msg){
    console.log('SEND:', opponentId, msg);

    var msg1 = {
      type: 'chat',
      body: msg,
      extension: {
        save_to_history: 1
      },
      markable: 1
    };


    QB.chat.send(opponentId, msg1);
  }




}










