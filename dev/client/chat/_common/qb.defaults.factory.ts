angular
  .module('chitchat')
  .factory('QBDefaultsFactory', QBDefaultsFactory)
;

QBConstant
  .$inject = []
;

function QBDefaultsFactory(){



  return {
    QB: {
      defaults: {
        appId: 44940,
        authKey: 'BbzRRPVR7TbfJbN',
        authSecret: 'qUMCXhuEPANPzPf',
        seshLogin: 'loglog',
        seshPassword: 'pasw'
      }
    }
  }

  

}