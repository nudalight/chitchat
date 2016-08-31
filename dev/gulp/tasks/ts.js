'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
// const typescript = require('gulp-typescript');
const debug = require('gulp-debug');
const uglify = require('gulp-uglify');
const order = require('gulp-order');
const insert = require('gulp-insert');
const sourcemaps = require('gulp-sourcemaps');
const CONF = require('../conf.js');


function gulpTs(){
  return gulp.src('**/*.ts', { cwd: CONF.paths.devFrontend })
    .pipe(sourcemaps.init())
    .pipe(order([
        '**/*module.*',
        '**/*config.*', 
        '**/*run.'
    ]))
    .pipe(debug())
    // .pipe(insert.wrap('(functio0n(){', '})();'))
    .pipe(concat('chat.min.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./client/js'))
    .pipe(connect.reload())
}

exports.task = gulpTs;