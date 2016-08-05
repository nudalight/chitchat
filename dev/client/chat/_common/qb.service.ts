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

  self.getDialogs = getDialogs;
  self.getDialogs2 = getDialogs2;

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

  function getDialogs2(opts){
    console.log(1,  $qb.users.listUsers(opts) );
  }





}










