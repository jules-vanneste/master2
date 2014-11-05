module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	jshint: {
  		all: ['Gruntfile.js', 'js/**/*.js', '!js/**/*.min.js']
  	},
  	watch: {
  		options: {
  			livereload: true,
  		},
  		jshint: {
  			files: ['<%= jshint.all %>'],
  			tasks: ['jshint']
  		}
  	},
  	connect: {
  		options: {
  			livereload: true,
  			open: true
  		},
  		server: {
  			options: {
  				hostname: 'localhost',
  				port: 9001
  			}
  		}
  	}
  });

  // Load the plugin that provides the "marked" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['jshint', 'connect', 'watch']);
};