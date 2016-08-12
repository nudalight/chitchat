'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');


function gulpServe(){

  return connect.server({
    root: './client',
    port: 1212,
    livereload: true
  });

}

exports.task = gulpServe;