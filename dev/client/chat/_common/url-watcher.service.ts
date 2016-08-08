angular
  .module('chitchat')
  .service('navigateService', navigateService)
;

navigateService
  .$inject = ['$location']
;

function navigateService($location){

  var self = this;

  self.navigateTo = navigateTo;
  self.urls = {
    authed: [
      'chat',
    ],
    notauthed: [
      '/',
      'login',
      'register'
    ]
  };



  function navigateTo(path){

    console.log('navigating to:', path);

    $location.path(path);

  }



}