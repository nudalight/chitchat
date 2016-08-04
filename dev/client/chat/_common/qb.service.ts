angular
  .module('chitchat')
  .service('QBService', QBService)
;

QBService
  .$inject = ['QBDefaultsFactory']
;

function QBService(QBDefaultsFactory){

  const vm = this;
  const $qb = QBDefaultsFactory;

  
  function init(){
    $qb.init($qb.defaults.appId, $qb.defaults.authKey, $qb.defaults.authSecret);

    $qb.createSession({
      login: '123',
      password: '123'
    }, (err, result) => {
      console.log('app sesh inited');
      console.log('a:err:', err);
      console.log('a:result:', result);
    })
  }

  function getDialogs(){
    $qb.users.listUsers({}, (err, result) => {
      console.log('resp:err:', err);
      console.log('resp: ', result);
    })
  }

}




