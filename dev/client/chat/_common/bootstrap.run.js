angular
  .module('chitchat')
  .run(run)
;

run
  .$inject = ['$rootScope', 'urlWatcherService']
;


function run($rootScope, urlWatcherService){

  $rootScope.$on('$stateChangeStart', urlWatcherService.handle);

}