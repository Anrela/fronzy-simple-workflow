"use strict";

var gulp = require('gulp'),
  concatCSS = require('gulp-concat-css'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'),
  prefix = require('gulp-autoprefixer'),
  livereload = require('gulp-livereloat'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  minifyCSS = require('gulp-minify-css');

// server connect
gulp.task('connect', function () {
  connect.server({
    root : 'app',
    livereload : true
  });
});

// css
gulp.task('css', function () {
  gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(prefix('last 15 versions'))
    .pipe(minifyCSS(''))
    .pipe(rename('bundle.min.css'))
    .pipe(connect.reload());
  });
  
// html
gulp.task('html', function () {
  gulp.src('app/index.html')
    .pipe(connect.reload());
});
  
// watch
gulp.task('watch', function () {
  gulp.watch('css/*.css', ['css'])
  gulp.watch('app/index.html', ['html']);
});

// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);
    
 
    
