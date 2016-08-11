angular
  .module('chitchat')
  .config(configLockerProvider)
;

configLockerProvider
  .$inject = ['lockerProvider']
;

function configLockerProvider(lockerProvider){

  lockerProvider.defaults({
    driver: 'local',
    namespace: 'chitchat',
    separator: '.',
    eventsEnabled: true,
    extend: {}
  });

}