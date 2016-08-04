angular
  .module('chitchat')
  .config(uiRouteConfig)
;

uiRouteConfig
  .$inject = ['$stateProvider', '$urlRouterProvider']
;

function uiRouteConfig($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('chat', {
      url: '',
      views: {
        'chatLeftUser': {
          templateUrl: './tpl/user-bar.html',
          controller: 'userBarController'
        },
        'chat.left.people': {
          templateUrl: './tpl/people.html',
          controller: 'peopleController'
        },
        // 'chat.right.members': {
        //   templateUrl: './tpl/members.html'
        // },
        // 'chat.right.history': {
        //   templateUrl: './tpl/history.html'
        // },
        // 'chat.right.input': {
        //   templateUrl: './tpl/input.html'
        // }
      }
    })

}