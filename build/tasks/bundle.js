'use strict';

var del = require("del");
var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var to5 = require('gulp-babel');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var compilerOptions = require('../babel-options');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var paths = require('../paths');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
// add custom browserify options here
var customOpts = {
    entries: ['./dist/module.js'],
    debug: true,
    sourceType: module
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

// add transformations here
// i.e. b.transform(coffeeify);
// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function () {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['./dist/']);
});

gulp.task('build-system', function () {
    return gulp.src(paths.source)
        .pipe(plumber())
        .pipe(changed(paths.output, {extension: '.js'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(to5(assign({}, compilerOptions)))
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest(paths.output));
});

gulp.task('build-vendor', function () {
    return gulp.src(paths.vendor)
        .pipe(plumber())
        .pipe(changed(paths.output, {extension: '.js'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(to5(assign({}, compilerOptions)))
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest(paths.output));
});

gulp.task('bundle-js', ["clean", "build-vendor", "build-system"], bundle); // so you can run `gulp js` to build the file

function bundle() {
    return b.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('dist/module.js'))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        // optional, remove if you dont want sourcemaps
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./export'));
}