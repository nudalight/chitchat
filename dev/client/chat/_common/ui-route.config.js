angular
  .module('chitchat')
  .config(uiRouteConfig)
;

uiRouteConfig
  .$inject = ['$stateProvider', '$urlRouterProvider']
;


function uiRouteConfig($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/login',
      views: {
        'chat': {
          templateUrl: './tpl/login.html',
          controller: 'loginCtrl',
          controllerAs: 'LOGIN'
        }
      }
    })
    .state('register', {
      url: '/register',
      views: {
        'chat': {
          templateUrl: './tpl/register.html',
          controller: 'registerCtrl',
          controllerAs: 'REGISTER'
        }
      }
    })
    .state('chat', {
      url: '/chat',
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
          templateUrl: './tpl/history.html',
          controller: 'historyController',
          controllerAs: 'HISTORY'
        },
        'chat.right.input': {
          templateUrl: './tpl/message-input.html',
          controller: 'messageInputController',
          controllerAs: 'MESSAGE_INPUT'
        }
      }
    });



}
