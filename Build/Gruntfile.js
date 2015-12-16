/*global module:false*/
module.exports = function(grunt) {
    grunt.initConfig({
        useminPrepare: {
            html: 'src/index.html'
        },
        copy: {
            dist: {
                expand: true,
                cwd: 'src/',
                src: ['index.html'],
                dest: 'dist/'
            },
        },
        'usemin': {
            html: 'dist/index.html'
        }

    });
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', [
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'copy:dist',
        'usemin'
    ]);
};