'use strict';

let pathToOpts = './dev/gulp/opts';
 
module.exports = {

  jade: inq('jade'),
  vendorJs: inq('vendor-js-deps'),
  vendorCss: inq('vendor-css-deps'),
  paths: inq('paths')

};

 
function inq(optPath){

  const fs = require('fs');
  const path = require('path');

  let readPath = path.join(pathToOpts, optPath + '.json');
  let opts = fs.readFileSync(readPath, 'utf8');

  return JSON.parse(opts);

}
