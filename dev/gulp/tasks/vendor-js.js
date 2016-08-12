'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const bowerFiles = require('bower-files')();
const uglify = require('gulp-uglify');
const order = require('gulp-order');
const CONF = require('../conf.js');


function gulpVendorJs(){

  let deps = bowerFiles.ext('js').files;
  console.log(deps);

  // deps.concat(['1.txt', '2.txt']);


  return gulp.src(deps)
    .pipe(order([
       '**/angular.js'
    ]))
    .pipe(debug())
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./client/js'))
}

exports.task = gulpVendorJs;
