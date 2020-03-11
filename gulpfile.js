// define gulp
const gulp = require('gulp');

// define sass 
const sass = require('gulp-sass');

// define htmlmin
const htmlmin = require('gulp-htmlmin');

//compile sass 
sass.compiler = require('node-sass');

// minify css 
cssmin = require('gulp-cssnano');
// sass function
gulp.task('sass', () => {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest('./des'));
});


// sass watch file 
gulp.task('watch', () => {
    gulp.watch('./scss/**/*.*', gulp.series('sass'));
});
//work the tasks sequence
gulp.task('default', gulp.series('sass','watch'));
