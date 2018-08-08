var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js'];

gulp.task('style', function(){
	return gulp.src(jsFiles)
		.pipe(jshint());

});

gulp.task('serve',['style'], function(){
	var options = {
		script: 'app.js',
		delayTime: 1,
		watch: jsFiles
	}
	return nodemon(options)
		.on('restart',function(ev){
			console.log('Restarting Server...');
		})
});