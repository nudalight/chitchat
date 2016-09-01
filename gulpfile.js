'use strict';

const gulp = require('gulp');
const fs = require('fs');


fs.readdirSync('./dev/gulp/tasks')
  .filter(filename => filename.match(/\.js$/i))
  .map(filename => {
    return {
      name: filename.substr(0, filename.length - 3),
      contents: require('./dev/gulp/tasks/' + filename)
    };
  })
  .forEach(file => gulp.task(
    file.name,
    file.contents.deps,
    file.contents.task
  ))
;
