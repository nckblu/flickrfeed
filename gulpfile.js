var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    wiredep = require('wiredep').stream;


gulp.task('connect', function() {
    connect.server({
        root: ['app'],
        port: 3000,
        livereload: true,
        middleware: function(connect) {
            return [connect().use('/bower_components', connect.static('bower_components'))];
        }
    });
});


/**
 * @task sass
 * Compile files from scss
 */
gulp.task('sass', function() {
    return gulp.src('app/sass/*.scss')
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        .pipe(gulp.dest('app/css'))
          .pipe(connect.reload());
       
});



/**
 * @task watch
 * Watch scss files for changes & recompile
 */
gulp.task('watch', function() {
    gulp.watch(['app/sass/*.scss', 'app/sass/**/*.scss'], ['sass']);
});

/**
 * @task default
 */
gulp.task('default', ['connect', 'watch']);

