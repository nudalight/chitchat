angular
  .module('chitchat')
  .controller('userBarController', userBarController)
;

userBarController
  .$inject = ['$scope']
; 

function userBarController($scope){
  $scope.test = {
    name: 'CHITNAME6'
  }
}