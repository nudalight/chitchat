'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const debug = require('gulp-debug');
const bowerFiles = require('bower-files')();
const order = require('gulp-order');
const rename = require('gulp-rename');


gulp.task('vendor:css', () => {
  return gulp.src(bowerFiles.ext('css').files)
    .pipe(order([
      '**/reset.css'
    ]))
    .pipe(debug())
    .pipe(concat('vendor.min.css'))
    .pipe(cleanCss({
      advanced: true,
      keepSpecialComments: 0,
      restructuring: true
    }))
    .pipe(gulp.dest('./client/css'))
});
