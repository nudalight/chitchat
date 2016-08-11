angular
  .module('chitchat')
  .service('authService', authService)
;

authService
  .$inject = ['$rootScope', 'locker', '$log', '$state', 'QBService']
;

function authService($rootScope, locker, $log, $state, QBService){

  var self = this;

  self.isAuthed = isAuthed;
  self.login = login;
  self.register = register;
  self.logout = logout;

  function auth(){

  }

  function login(login, password){
    console.log('FROM auth service');

    QBService.login(login, password, callback);

    function callback(err, res){
      console.log('HELLO from callback', err, res);

      // writeToLocalStorage 15936143

      if (err){
        $rootScope.$broadcast('QB:LOGINFAILED');
        return;
      }

      locker.put('login', login);
      locker.put('password', password);
      locker.put('user-id', res.id);

      $state.go('chat');

    }
  }


  function register(){

  }

  function logout(){

    locker.forget('login');
    locker.forget('password');
    locker.forget('user-id');


  }

  function isAuthed(){
    return locker.has('user-id');
  }


}