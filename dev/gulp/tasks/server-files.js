'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const CONF = require('../conf.js');


function serverFiles(){
  return gulp.src('**/*.js', { cwd: CONF.paths.devBackend })
    .pipe(debug())
    .pipe(gulp.dest('./server'))
}

exports.task = serverFiles;
