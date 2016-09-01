angular
  .module('chitchat')
  .service('urlWatcherService', urlWatcherService)
;

urlWatcherService
  .$inject = ['$state', '$log', 'authService']
;


function urlWatcherService($state, $log, authService){

  console.log('service loaded');

  var self = this;

  self.paths = {
    authed: [
      'chat'
    ],
    notauthed: [
      'login',
      'register',
      ''
    ]
  };

  self.handle = function(event, toState, toParams, fromState, fromParams){
    var authAlias = authService.isAuthed() ? 'authed' : 'notauthed';
    var isAllowed = isPathAllowed(toState, authAlias);

    if (!isAllowed){
      $state.go(self.paths[authAlias][0]);
    }

    $log.log('path being watched:', toState.url, ' --> isAllowed:', isAllowed);
  };


  function isPathAllowed(path, authAlias){
    var isAllowed = false;

    self.paths[authAlias].forEach(function(v, i, list){
      if (path.name == v){
        isAllowed = true;
      }
    });

    return isAllowed;
  }





}












/*

myApp.directive('recordAvailabilityValidator',   ['$http',
  function($http) {
    return {
      require : 'ngModel',
      link : function(scope, element, attrs, ngModel) {
        var apiUrl = attrs.recordAvailabilityValidator;

        function setAsLoading(bool) {
          ngModel.$setValidity('recordLoading', !bool);
        }

        function setAsAvailable(bool) {
          ngModel.$setValidity('recordAvailable', bool);
        }

        ngModel.$parsers.push(function(value) {
          if(!value || value.length == 0) return;

          setAsLoading(true);
          setAsAvailable(false);
          $http.get(apiUrl, { v : value })
            .success(function() {
              setAsLoading(false);
              setAsAvailable(true);
            })
            .error(function() {
              setAsLoading(false);
              setAsAvailable(false);
            });
          return value;
        })
      }
    }
  }]);

  */
