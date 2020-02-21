const gulp = require('gulp');
const copyfiles = require('copyfiles');

const LIBRARY_SRC = '../dist/**/*';
const LIBRARY_DIST = 'lib';

function copyLib(callback) {
  copyfiles([ LIBRARY_SRC, LIBRARY_DIST ], 2, callback);
}

function copyLibWatch() {
  return gulp.watch(LIBRARY_SRC, copyLib);
}

module.exports = {
  copyLib,
  copyLibWatch
}
