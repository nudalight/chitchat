angular
  .module('chitchat')
  .directive('validateControl', validControl)
;


validControl
  .$inject = ['validControlPresets']
;


// function validControl(validControlPresets){
//   return {
//     require: 'ngModel',
//     link: function(scope, element, attr, ctrl){
//
//       function validate(value){
//         let isValid = validControlPresets[attr.name].isValid(value);
//         ctrl.$setValidity('validControl', isValid);
//
//         return value
//       }
//
//       ctrl.$parsers.push(validate);
//
//     }
//   }
// }


function validControl(validateObj, $log){
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {

      function myValidation(value) {

        var isValid = validateMe();
        mCtrl.$setValidity('validateMe', isValid);


        function validateMe(){
          var result = validateObj[attr.name].isValid(value);
          $log.log('result: ', result);
          return result;
        }

        return value;

      }

      mCtrl.$parsers.push(myValidation);
    }
  }
}
