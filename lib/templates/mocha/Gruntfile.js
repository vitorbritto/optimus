module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        mocha: {
            all: {
                src: 'spec/index.html',
                runt: true
            }
        },
        watch: {
            test: {
                files: ['./spec/*.js'],
                tasks: 'mocha'
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch:test']);
    grunt.registerTask('test', ['mocha']);
};
