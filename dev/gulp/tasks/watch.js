'use strict';

const gulp = require('gulp');
const gulpRestart = require('gulp-restart');
const path = require('path');
const CONF = require('../conf.js');


function gulpServe(){

  let basePath = path.join(CONF.paths.devFrontend, '/**');

  gulp.watch(basePath + '/*.ts', ['ts']);
  gulp.watch(basePath + '/*.jade', ['jade']);
  gulp.watch(basePath + '/*.sass', ['sass']);
  gulp.watch('./gulpfile.js', gulpRestart);

}

exports.task = gulpServe;