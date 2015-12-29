var gulp = require('gulp');
var copy = require('gulp-copy');

var config = {
	dest: 'dist',
	paths: {
		copy: {
			root: ['./src/index.html', './src/main.js'],
			bootstrap: ['./node_modules/bootstrap/dist/css/bootstrap-theme.css', './node_modules/bootstrap/dist/css/bootstrap.css', './node_modules/bootstrap/dist/js/bootstrap.js', './node_modules/bootstrap/dist/fonts/*.*']
		}
	}
};

gulp.task('copy', function () {
	gulp.src(config.paths.copy.root)
		.pipe(copy(config.dest, {
			prefix: 1
		}));
});

gulp.task('bootstrap', function () {
	gulp.src(config.paths.copy.bootstrap)
		.pipe(copy(config.dest, {
			prefix: 3
		}));
});

gulp.task('watch', function () {
	gulp.watch(config.paths.copy.root, ['copy']);
});



gulp.task('default', ['copy', 'bootstrap', 'watch']);