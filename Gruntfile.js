module.exports = function(grunt) {

  // Init base setup for Gruntfile.js
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'build/sass/main.css': 'build/sass/style.scss'
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/js/built.min.js': ['build/javascript/script.js', 'build/javascript/waypoint.js']
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/css/main.min.css': 'build/sass/main.css'
        }
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Run npm tasks
  grunt.registerTask('default', ['sass', 'uglify', 'cssmin']);
  
};