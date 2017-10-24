const gulp = require('gulp');
const copyfiles = require('copyfiles');

const LIBRARY_SRC = '../dist/**/*';
const LIBRARY_DIST = 'esm/lib';

gulp.task('copy-lib', (callback) => {
  copyfiles([ LIBRARY_SRC, LIBRARY_DIST ], 2, callback);
});

gulp.task('copy-lib:watch', () => {
  gulp.watch(LIBRARY_SRC, ['copy-lib']);
});
