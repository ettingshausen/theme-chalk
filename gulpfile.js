'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssmin = require('gulp-cssmin');
const postcss = require('gulp-postcss')
function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(postcss([autoprefixer()]))
    .pipe(cssmin())
    .pipe(dest('./lib'));
}

function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));
}

exports.build = series(compile, copyfont);
