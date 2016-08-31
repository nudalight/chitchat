'use strict';

const gulp = require('gulp');
const gulpRestart = require('gulp-restart');
const path = require('path');
const CONF = require('../conf.js');


function gulpWatch(){

  let FRONTEND = path.join(CONF.paths.devFrontend, '/**');
  let BACKEND = path.join(CONF.paths.devBackend, '/**');

  gulp.watch(FRONTEND + '/*.ts', ['ts']);
  gulp.watch(FRONTEND + '/*.jade', ['jade']);
  gulp.watch(FRONTEND + '/*.sass', ['sass']);

  gulp.watch(BACKEND + '/*.js', ['server-files']); 

  gulp.watch('./gulpfile.js', gulpRestart);

}

exports.task = gulpWatch;