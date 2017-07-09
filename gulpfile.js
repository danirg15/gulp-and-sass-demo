const gulp = require('gulp')
const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')


gulp.task('css', () => {
	return gulp.src(['./src/sass/**/*.scss'])
			   .pipe(sass())
			   .pipe(cssmin())
			   .pipe(autoprefixer())
			   .pipe(gulp.dest('./dist/css'))
})

gulp.task('js', () => {
	return gulp.src(['./src/js/**/*.js'])
			   .pipe(concat('bundle.js'))
			   .pipe(uglify())
			   .pipe(gulp.dest('./dist/js'))
})

gulp.task('watch', () => {
	gulp.watch('./src/sass/**/*.scss', ['css'])
	gulp.watch('./src/js/**/*.js', ['js'])
})

gulp.task('default', ['css', 'js', 'watch'])

