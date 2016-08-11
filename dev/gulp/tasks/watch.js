'use strict';

const gulp = require('gulp');
const gulpRestart = require('gulp-restart');


gulp.task('serve', () => {

  let path = './dev/client/chat/**';

  gulp.watch(path + '/*.ts', ['ts']);
  gulp.watch(path + '/*.jade', ['jade']);
  gulp.watch(path + '/*.sass', ['sass']);
  gulp.watch('./gulpfile.js', gulpRestart);

});