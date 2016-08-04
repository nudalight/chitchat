angular
  .module('chitchat')
  .controller('peopleController', peopleController)
;

peopleController
  .$inject = ['$scope']
;

function peopleController($scope){
  $scope.test = {
    name: 'PEOPLE _'
  }
}