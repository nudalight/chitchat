'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const debug = require('gulp-debug');
const flatten = require('gulp-flatten');
const jade = require('gulp-jade');
const CONF = require('../conf.js');


function gulpJadeTpl(){
  return gulp.src([
    '*/*.jade',
    '!**/_common/*'
  ], { cwd: CONF.paths.devFrontend })
    .pipe(debug())
    .pipe(jade(CONF.jade))
    .pipe(flatten())
    .pipe(gulp.dest('./client/tpl'))
    .pipe(connect.reload())
}

exports.task = gulpJadeTpl;