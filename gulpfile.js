'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src(['./src/vendors/sass/**/*.scss', './src/vendors/sass/**/*.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', (a) => {
  gulp.watch(['./src/vendors/sass/**/*.scss', './src/vendors/sass/**/*.sass'], gulp.series(['sass']));
  return a;
});

gulp.task('prod-move', (a) => {
  // HTML
  gulp.src('./src/*.html').pipe(gulp.dest('./docs/'));
  // CSS
  gulp.src('./src/css/*.css').pipe(cleanCSS({compatibility: 'ie8'})).pipe(gulp.dest('./docs/css'));
  // JS
  gulp.src('./src/js/*.js').pipe(gulp.dest('./docs/js'));
  a();
});

exports.watch = 'watch';
exports.build = gulp.series(['sass'])
exports.production = gulp.series(['sass', 'prod-move']);
