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
        'chat.left.user-bar': {
          templateUrl: './tpl/user-bar.html',
          controller: 'userBarController',
        },
        'chat.left.dialogs': {
          templateUrl: './tpl/dialogs.html',
          controller: 'dialogsController',
          controllerAs: 'DIALOGS'
        },
        'chat.right.members': {
          templateUrl: './tpl/members.html'
        },
        'chat.right.history': {
          templateUrl: './tpl/history.html'
        },
        'chat.right.input': {
          templateUrl: './tpl/input.html'
        }
      }
    })

}