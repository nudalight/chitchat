angular
  .module('chitchat')
  .factory('QBDefaultsFactory', QBDefaultsFactory)
;

QBDefaultsFactory
  .$inject = []
;

function QBDefaultsFactory(){

  QB.defaults = {
    appId: 44940,
    authKey: 'BbzRRPVR7TbfJbN',
    authSecret: 'qUMCXhuEPANPzPf',
    seshLogin: 'nudalight',
    seshPassword: '12345678'
  };
  
  return QB;



}