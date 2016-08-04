'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const connect = require('gulp-connect');
const typescript = require('gulp-typescript');
const debug = require('gulp-debug');
const bowerFiles = require('bower-files')();
const gulpRestart = require('gulp-restart');
const uglify = require('gulp-uglify');
const order = require('gulp-order');
const insert = require('gulp-insert');
const rename = require('gulp-rename');
const flatten = require('gulp-flatten');


gulp.task('sass', () => {
    return gulp.src('./dev/client/chat/*/*.sass')
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
});


gulp.task('jade', ['jade:index', 'jade:tpl']);


gulp.task('jade:index', () => {
    return gulp.src('./dev/client/chat/_common/*.jade')
        .pipe(debug())
        .pipe(jade())
        .pipe(gulp.dest('./client'))
        .pipe(connect.reload())
});


gulp.task('jade:tpl', () => {
    return gulp.src([
        './dev/client/chat/*/*.jade',
        '!**/_common/*'
    ])
        .pipe(debug())
        .pipe(jade())
        .pipe(flatten())
        .pipe(gulp.dest('./client/tpl'))
        .pipe(connect.reload())
}); 


gulp.task('ts', () => {
  return gulp.src('./dev/client/chat/**/*.ts')
      .pipe(order([
          '**/module.*'
      ]))
      .pipe(debug())
      // .pipe(insert.wrap('(function(){', '})();'))
      .pipe(concat('chat.min.js'))
      // .pipe(uglify())
      .pipe(gulp.dest('./client/js'))
      .pipe(connect.reload())
});


gulp.task('vendor', ['vendor:js', 'vendor:css']);


gulp.task('vendor:js', () => {
    let deps = bowerFiles.ext('js').files;
    deps.push('bower_components/quickblox/quickblox.min.js');

   return gulp.src(deps)
       .pipe(order([
           '**/angular.js'
       ]))
       .pipe(debug())
       .pipe(concat('vendor.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('./client/js'))
});


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


gulp.task('serve', () => {
  connect.server({
    root: './client',
    port: 3333,
    livereload: true 
  });

    let path = './dev/client/chat/**';

    gulp.watch(path + '/*.ts', ['ts']);
    gulp.watch(path + '/*.jade', ['jade']);
    gulp.watch(path + '/*.sass', ['sass']);
    gulp.watch('./gulpfile.js', gulpRestart);

});


gulp.task('default', ['serve']);