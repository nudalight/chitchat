'use strict';

const gulp = require('gulp');

const connect = require('gulp-connect');
const debug = require('gulp-debug');
const flatten = require('gulp-flatten');


gulp.task('jade:tpl', () => {
  return gulp.src([
    './dev/client/chat/*/*.jade',
    '!**/_common/*'
  ])
    .pipe(debug())
    .pipe(jade(jadeOpts))
    .pipe(flatten())
    .pipe(gulp.dest('./client/tpl'))
    .pipe(connect.reload())
});