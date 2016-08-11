'use strict';

const gulp = require('gulp');
const jade = require('gulp-jade');
const connect = require('gulp-connect');
const debug = require('gulp-debug');


gulp.task('jade:index', () => {
  return gulp.src('./dev/client/chat/_common/*.jade')
    .pipe(debug())
    .pipe(jade(jadeOpts))
    .pipe(gulp.dest('./client'))
    .pipe(connect.reload())
});
