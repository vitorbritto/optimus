module.exports = function(grunt) {

    'use strict';


    grunt.initConfig({

        // Config paths
        paths: {
            modules: '../app/scripts/modules/*.js',
            specs:   'spec/modules/*.js'
            helpers: 'spec/helpers/*.js',
            all: [
                'Gruntfile.js',
                'app/scripts/**/*.js',
                'spec/**/*.js'
            ]
        },

        // Config Jasmine Task
        jasmine: {
            src : '<%= paths.modules %>',
            vendor: [ ],
            options: {
                specs: '<%= paths.specs %>',
                helpers: '<%= paths.helpers %>'
            },
            // host : 'http://127.0.0.1:8000/',
            keepRunner: true

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
                tasks: ['jasmine'],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['jasmine']);
    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('watch', ['scripts', 'spec']);
};
