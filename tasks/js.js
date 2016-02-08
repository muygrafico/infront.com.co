var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

gulp.task('js:dev', function() {
	return gulp.src(['site/js/vendors/**.js' ,'site/js/modules/**.js'])
		.pipe($.sourcemaps.init())
		.pipe($.concat('main.js'))
		.pipe($.uglify())
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('site/js/'));
});
