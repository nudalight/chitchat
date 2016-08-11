angular
  .module('chitchat')
  .config(iconConfig)
;
 
iconConfig
  .$inject = ['$mdIconProvider']
;

function iconConfig($mdIconProvider){
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24)
    ;

}  