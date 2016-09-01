angular
  .module('chitchat')
  .directive('validControl', validControl)
;


validControl
  .$inject = ['validControlPresets']
;


function validControl(validControlPresets){
  return {
    require: 'ngModel',
    link: function(scope, element, attr, ctrl){

      function validate(value){
        let isValid = validControlPresets[attr.name].isValid(value);
        ctrl.$setValidity('valid-control', isValid);

        console.log('result: ', isValid);
        return value
      }

      ctrl.$parsers.push(validate);

    }
  }
}
