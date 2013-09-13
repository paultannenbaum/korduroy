'use strict';

module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch:{
      compass:{
        files:['assets/styles/**/*.{scss,sass}'],
        tasks:['compass']
      },
      coffee:{
        files:['assets/scripts/coffee/*.coffee'],
        tasks:['coffee']
      },
      js:{
        files:'<%= jshint.all %>',
        tasks:['jshint', 'uglify']
      },
      livereload:{
        options:{ livereload:true },
        files:['style.css', 'assets/scripts/*.js', '*.html', '*.php', 'assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
      }
    },

    compass:{
      dist:{
        options:{
          config:'config.rb',
          force:true
        }
      }
    },

    coffee:{
      compile:{
        files:{
          'assets/scripts/source/korduroy.js':['assets/scripts/coffee/*.coffee']
        }
      }
    },

    jshint:{
      options:{
        jshintrc:'.jshintrc',
        "force":true
      },
      all:['Gruntfile.js', 'assets/scripts/source/*.js']
    },

    uglify:{
      app:{
        options: {
          // sourceMap: 'assets/scripts/map/source-map-app.js',
          mangle: false,
          compress: false,
          beautify: true
        },
        files:{
          'assets/scripts/app.js':[
            'assets/scripts/vendor/plugins/*.js',
            'assets/scripts/source/*.js']
        }
      }

    }
  });

  grunt.registerTask('default', ['watch']);
};
