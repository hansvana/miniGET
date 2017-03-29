const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

gulp.task('default', function() {
    var bundler = browserify('./src/script.es6', {debug:true})
        .transform(babelify, {presets: ['es2015']})
        .bundle();

    return bundler
        .pipe(source('miniGET.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
