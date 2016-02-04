var gulp = require('gulp');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');

gulp.task('html5',function(){
	 return gulp.src(['**/*','!node_modules/**'])
        	.pipe(zip('template.html5'))
        	.pipe(gulp.dest('.')); 
});