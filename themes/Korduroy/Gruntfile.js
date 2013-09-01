'use strict';

module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        // watch for changes and trigger compass, jshint, uglify and livereload
        watch: {
            compass: {
                files: ['assets/scss/**/*.{scss,sass}'],
                tasks: ['compass']
            },
            coffee: {
              files: ['assets/scripts/coffee/*.coffee'],
              tasks: ['coffee']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                options: { livereload: true },
                files: ['style.css', 'assets/scripts/*.js', '*.html', '*.php', 'assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },

        // compass and scss
        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },

        coffee: {
          compile: {
            files: {
              'assets/scripts/source/korduroy.js': ['assets/scripts/coffee/*.coffee']
            }
          }
        },

        // javascript linting with jshint
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
            all: [
                'Gruntfile.js',
                'assets/scripts/source/*.js'
            ]
        },

        // uglify to concat, minify, and make source maps
        uglify: {
            app: {
              // options: {
              //   sourceMap: 'assets/scripts/map/source-map-app.js'
              // },
              files: {
                'assets/scripts/app.js': ['assets/scripts/vendor/libs/*.js', 'assets/scripts/vendor/plugins/*.js', 'assets/scripts/source/*.js']
              }
            }

        }
    });

    // register task
    grunt.registerTask('default', ['watch']);
};
