module.exports = function(grunt) {

  'use strict';

  var path = require('path');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /* Delete out all the content from the following locations */
    /*
    clean: {
      vendor: [
        'demo',
        'dist',
        'docs'
      ]
    },
    */

    /* This tasks downloads only the "main" files from each repo listed in bower.json */
    bower: {
      install: {
        options: {
          targetDir: 'vendor',
          install: true,
          verbose: true,
          cleanBowerDir: true,
          cleanTargetDir: true,
          layout: function(type, component) {
            return path.join(component);
          }
        }
      }
    },

    less: {
      main: {
        options: {
          yuicompress: false
        },
        files: {
          'dist/static/css/cf-tabs.css': [
            'src/cf-tabs.less'
          ]
        }
      }
    },

    autoprefixer: {
      options: {
        // Options we might want to enable in the future.
        diff: false,
        map: false
      },
      multiple_files: {
        // Prefix all CSS files and overwrite.
        expand: true,
        src: 'dist/static/css/cf-tabs.css'
      },
    },

    /**
     * Uglify: https://github.com/gruntjs/grunt-contrib-uglify
     * 
     * Minify JS files.
     * Make sure to add any other JS libraries/files you'll be using.
     */
    uglify: {
      options: {
        compress: false,
        mangle: false,
        beautify: true,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n'
      },
      vendor: {
        files: {
          'dist/static/js/vendor.js': [
            'vendor/jquery/jquery.js'
          ]
        }
      },
      main: {
        files: {
          'dist/static/js/cf-tabs.js': [
            'src/cf-tabs.js'
          ]
        }
      },
      demo: {
        files: {
          'docs/static/js/main.js': [
            'vendor/jquery/jquery.js','src/cf-tabs.js'
          ]
        }
      },
    },


    htmlbuild: {
      dist: {
        src: 'src/cf-tabs.html',
        dest: 'dist/',
        options: {
          beautify: true
        }
      }
    },

    /* 
    * Copy is used to copy the files from the dist directory to docs and demo. 
    * dist is the output location of the other grunt tasks
    */
    /*
    copy: {
      docs: {
        files:
        [{
          expand: true,
          cwd: 'dist/',
          src: ['static/css/cf-tabs.css', 'static/js/cf-tabs.js', 'static/js/vendor.js'],
          dest: 'docs'
        }]
      },
      demo: {
        files:
        [{
          expand: true,
          cwd: 'dist/',
          src: ['static/css/cf-tabs.css', 'static/js/cf-tabs.js', 'static/js/vendor.js'],
          dest: 'demo'
        }]
      }
    },
*/
    watch: {
      scripts: {
        files: ['src/*'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },


    connect: {
      server: {
        options: {
          port: 9001,
          base: 'dist'
        }
      }
    },
/**
     * JSHint: https://github.com/gruntjs/grunt-contrib-jshint
     * 
     * Validate files with JSHint.
     * Below are options that conform to idiomatic.js standards.
     * Feel free to add/remove your favorites: http://www.jshint.com/docs/#options
     */
    jshint: {
      options: {
        camelcase: false,
        curly: true,
        forin: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        quotmark: true,
        sub: true,
        boss: true,
        strict: true,
        evil: true,
        eqnull: true,
        browser: true,
        plusplus: false,
        globals: {
          jQuery: true,
          $: true,
          module: true,
          require: true,
          define: true,
          console: true,
          EventEmitter: true
        }
      },
      all: ['dist/static/js/cf-tabs.js']
    },

    topdoc: {
      docs: {
        options: {
          source: 'dist/static/css/',
          destination: 'docs/',
          template: 'node_modules/cf-component-demo/code_examples/',
          templateData: {
            family: '<%= pkg.name %>',
            title: '<%= pkg.name %> docs',
            repo: '<%= pkg.homepage %>',
            jsBody: 'static/js/main.js'
          }
        }
      }
    }


  });

  /**
   * The above tasks are loaded here.
   */
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-topdoc');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  /**
   * Create custom task aliases and combinations
   */
  grunt.registerTask('vendor', ['bower']);
  //grunt.registerTask('demo', ['copy']);
  grunt.registerTask('build', ['less', 'autoprefixer', 'uglify', 'htmlbuild']);
  grunt.registerTask('serve', ['connect:server','watch']);
  grunt.registerTask('default', ['build']);

};
