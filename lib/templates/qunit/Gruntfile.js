module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        // Config paths
        paths: {
            modules: '../app/scripts/modules/*.js',
            specs:   'spec/modules/*.js',
            helpers: 'spec/helpers/*.js',
            all: [
                'Gruntfile.js',
                'app/scripts/**/*.js',
                'spec/**/*.js'
            ]
        },

        // Config qunit Task
        qunit: {
            src : 'spec/index.html',
        },

        // Config JSHint Task
        jshint: {
            all: '<%= paths.all %>',
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Config Watch Task
        watch: {
            scripts: {
                files: '<%= paths.all %>',
                tasks: ['jshint'],
            },
            spec: {
                files: ['<%= paths.modules %>', '<%= paths.specs %>', '<%= paths.helpers %>'],
                tasks: ['qunit'],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['qunit']);
    grunt.registerTask('lint', ['jshint']);
};
