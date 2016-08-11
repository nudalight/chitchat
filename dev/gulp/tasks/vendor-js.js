'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const bowerFiles = require('bower-files')();
const uglify = require('gulp-uglify');
const order = require('gulp-order');



gulp.task('vendor:js', () => {
  let deps = bowerFiles.ext('js').files;
  deps.push('bower_components/quickblox/quickblox.min.js');
  deps.push('bower_components/svg-assets-cache.js/svg-assets-cache.js');

  return gulp.src(deps)
    .pipe(order([
       '**/angular.js'
    ]))
    .pipe(debug())
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./client/js'))
});
