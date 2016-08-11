'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');


gulp.task('serve', () => {

  connect.server({
    root: './client',
    port: 1212,
    livereload: true
  });

});