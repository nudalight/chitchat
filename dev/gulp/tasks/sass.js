'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const order = require('gulp-order');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const connect = require('gulp-connect');

function gulpSass(){
  return gulp.src('./dev/client/chat/**/*.sass')
    .pipe(order([
        '**/_common/**'
    ]))
    .pipe(debug())
    .pipe(concat('sassify.sass'))
    .pipe(sass()) 
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(rename('chat.min.css'))
    .pipe(gulp.dest('./client/css'))
    .pipe(connect.reload())
}

exports.task = gulpSass;