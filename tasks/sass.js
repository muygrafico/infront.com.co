var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').get('infront');
var gulp = require('gulp');
var reload = browserSync.reload;

gulp.task('sass:dev', function() {
	return gulp.src('site/styles/sass/main.scss')
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.autoprefixer())
		.pipe($.sass({outputStyle: 'compressed'}))
		.pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest('site/styles/css'))
		.pipe(reload({stream: true}));
});
