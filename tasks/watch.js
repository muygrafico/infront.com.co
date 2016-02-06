var gulp = require('gulp');

//Watch styles 
// Watch sass files and run sass:dev task

gulp.task('watch:styles', function() {
	return gulp.watch(['site/styles/sass/*.scss', 'site/styles/sass/**/*.scss'], ['sass:dev']);
});

//Watch html
// Watch html files changes and run browser:reload task

gulp.task('watch:html', function() {
	return gulp.watch(['site/*.html'], ['browser:reload']);
});

//Watch js
// Watch js files changes and run js:dev

gulp.task('watch:js', function() {
	return gulp.watch(['site/js/dev/*.js', 'site/js/dev/**/*.js'], ['js:dev', 'browser:reload']);
});

//Watch
// Global Watch task

gulp.task('watch', ['watch:html']);
