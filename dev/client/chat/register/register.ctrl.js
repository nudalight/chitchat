angular
  .module('chitchat')
  .controller('registerCtrl', registerCtrl)
;

registerCtrl
  .$inject = ['$rootScope', '$scope', 'authService', '$log', 'trianglifyService', '$http', 'vendorData']
;

function registerCtrl($rootScope, $scope, authService, $log, trianglifyService, $http, vendorData){

  var vm = this;

  vm.state = {
    step: 0
  };

  vm.form = {};
  vm.errors = {};
  vm.regions = {};
  vm.actions = {
    submitEmail: function(){
      console.log(vm.form);
      
    },
    nextStep: function(){
      vm.state.step++;
      console.log(vm.form)
    }
  };

  init();

  $scope.$on('$viewContentLoaded', function(){
    trianglifyService.generateTo('.register');
  });






  function init(){

    $http
      .get(vendorData.urlToCountriesAndCitiesJson)
      .then((response) => {

        let middle, raw = angular.fromJson(response);

        _.each(raw.data, (v, i) => {
          vm.regions[i] = _.uniq(v);
        });

      })

  }


}
