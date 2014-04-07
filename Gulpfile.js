/*
 * Optimus
 * https://github.com/vitorbritto/optimus
 *
 * Copyright (c) 2014 Vitor Britto
 * Licensed under the MIT license.
 */

'use strict';

// ========
// SETTINGS
// ========

var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    mocha   = require('gulp-mocha');

var path = path || {};

path = {
    all: ['./lib/*.js', './spec/*.js'],
    spec: './spec/*.js'
};


// ======================================
// TASKS
// ======================================

// JSHint Task Configuration
gulp.task('jshint', function () {
    gulp.src(path.all)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Mocha Task Configuration
gulp.task('mocha', function () {
    gulp.src(path.spec)
        .pipe(mocha({
            globals: ['chai'],
            timeout: 6000,
            ignoreLeaks: false,
            ui: 'bdd',
            reporter: 'spec'
        }));
});

gulp.task('watch', function () {
    gulp.watch(path.all, ['jshint']);
});

// Test task
gulp.task('test', ['jshint', 'mocha']);
