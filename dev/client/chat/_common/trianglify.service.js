angular
  .module('chitchat')
  .service('trianglifyService', trianglifyService)
;

trianglifyService
  .$inject = []
;

function trianglifyService(){

  var self = this;

  self.generateTo = function(selector){

    var pattern = Trianglify({
      width: window.innerWidth,
      height: window.innerHeight
    });

    var tgNode = document.body.querySelector(selector);
    tgNode.insertBefore(pattern.canvas(), tgNode.firstChild);

  }

}   