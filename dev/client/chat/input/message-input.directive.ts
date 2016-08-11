angular
  .module('chitchat')
  .directive('textareaHeight', textareaHeight)
;

textareaHeight
  .$inject = ['$timeout']
;

function textareaHeight($timeout){


  return {

    restrict: 'A',
    require: 'ngModel',


  }
  
  
  

}




var app = angular.module('app', []);

app.controller('appCtrl', function($scope){

  $scope.inputText = 22;
  $scope.textareaText = 11;

});


app.directive('someDir', function(){

  return function($scope, element, attrs){

    $scope.$watch(attrs.attr1, function(value){
      element.text('I said: ' + value + '!');
    });

  }


});