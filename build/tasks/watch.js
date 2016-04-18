'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var del = require('del');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');

// add custom browserify options here
var customOpts = {
    entries: ['./src/index.js'],
    debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

gulp.task('watch', ["bundle-js"], function watch() {
    b.on('update', bundle); // on any dep update, runs the bundler
    b.on('log', gutil.log); // output build logs to terminal
}); // so you can run `gulp js` to build the file