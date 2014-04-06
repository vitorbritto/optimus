module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        jasmine: {
            all: 'spec/index.html'
        },
        watch: {
            test: {
                files: ['./spec/*.js'],
                tasks: 'qunit'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch:test']);
    grunt.registerTask('test', ['jasmine']);
};
