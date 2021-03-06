const validControlPresets = {

  username: {
    isValid: function(value){
      console.log('check validity');
      return /^(.{6,15})$/.test(value);
    }
  },

  password: {
    isValid: function(value){
      result = true;
      regex = [
        /[0-9]{1,}/,
        /[A-Z]{1,}/,
        /^[^\W_]{6,}$/
      ];
      regex.map(function(r){
        if (!r.test(value)){
          result = false;
        }
      });

      return result;
    }
  },

  firstName: {
    isValid: function(value){
      return /^(.{2,15})$/.test(value);
    }
  },

  lastName: {
    isValid: function(value){
      return /^(.){2,20}$/.test(value);
    }
  },

  birthday: {
    isValid: function(value){
      var
        jsYear = 1000 * 3600 * 24 * 365,
        provided = +new Date(value) / jsYear,
        current = +new Date() / jsYear,
        legalAge = 18;

      return legalAge < parseInt(current) - parseInt(provided);
    }
  },

  phoneNumber: {
    isValid: function(value){
      return /^(\d[- .]*){7,13}$/.test(value);
    }
  }


};



angular
  .module('chitchat')
  .constant('validControlPresets', validControlPresets)
;
