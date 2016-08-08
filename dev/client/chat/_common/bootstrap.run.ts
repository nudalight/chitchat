angular
  .module('chitchat')
  .run(run)
;

run
  .$inject = ['$rootScope']
;


function run($rootScope){
  console.log('RUN');

  $rootScope.$on('$stateChangeStart', function(){

    console.log('change start');

  });
  
}