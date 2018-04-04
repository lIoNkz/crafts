var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
  livereload = require('gulp-livereload');

// Styles Task
// SASS
gulp.task('sass', function () {
  	gulp.src('sass/**/*.scss')
      	.pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

// Scripts Task
// JS
gulp.task('scripts', function () {
  	gulp.src('js/*.js')
      	.pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

// Watch Task
// Sass + JS
gulp.task('watch', function () {
  var server = livereload();
    	gulp.watch('js/*.js', ['scripts']);
    	gulp.watch('sass/**/*.scss', ['sass']);
});


// Default Task
gulp.task('default', ['sass','scripts']);