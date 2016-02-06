var gulp = require('gulp');
var browserSync = require('browser-sync').create('infront');


//Normal site

gulp.task('browser:site', function() {
	var config = {
		server: {
			baseDir: './site'
		},
		open: false
	};

	browserSync.init(config);
});

//Reload site

gulp.task('browser:reload', function() {
	return browserSync.reload();
});
