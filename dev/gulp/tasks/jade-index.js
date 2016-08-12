'use strict';

const gulp = require('gulp');
const jade = require('gulp-jade');
const connect = require('gulp-connect');
const debug = require('gulp-debug');
const CONF = require('../conf.js');


function gulpJadeIndex(){

  return gulp.src('_common/*.jade', { cwd: CONF.paths.devFrontend })
    .pipe(debug())
    .pipe(jade(CONF.jade))
    .pipe(gulp.dest('./client'))
    .pipe(connect.reload())

}

exports.task = gulpJadeIndex;