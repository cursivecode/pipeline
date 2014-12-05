/*** Packages ***/
// Gulp Library
var gulp = require('gulp');
// Minifies javascript
var uglify = require('gulp-uglify');
// Compiles Sass files
var sass = require('gulp-sass');
// Keeps Gulp running after error
var plumber = require('gulp-plumber');
// Reloads the page on code change
var livereload = require('gulp-livereload');
// Runs shell commands
var shell = require('gulp-shell');
// Concat
var concat = require('gulp-concat');
// SourceMaps
var sourcemaps = require('gulp-sourcemaps');
// Coffeescript
var coffee = require('gulp-coffee');

/*** File Locations ***/
var javascriptFiles = 'priv/assets/javascripts/**/*.js';
var coffeescriptFiles = 'priv/assets/coffeescripts/**/*.coffee';
var scssFiles = 'priv/assets/stylesheets/**/*.scss';
var sassFiles = 'priv/assets/stylesheets/**/*.sass';

/*** Development Tasks ***/
gulp.task('coffeescript', function() {
    gulp.src(coffeescriptFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(coffee())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('priv/static/js'))
        .pipe(livereload());
});

gulp.task('javascript', function() {
    gulp.src(javascriptFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('priv/static/js'))
        .pipe(livereload());
});

gulp.task('sass', function() {
    gulp.src([sassFiles, scssFiles])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('priv/static/css/'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(coffeescriptFiles, ['coffeescript']);
    gulp.watch(javascriptFiles, ['javascript']);
    gulp.watch(sassFiles, ['sass']);
    gulp.watch(scssFiles, ['sass']);
});

gulp.task('phoenix development', shell.task([
    'MIX_ENV=dev mix phoenix.start'
]));

gulp.task('phoenix production', shell.task([
    'MIX_ENV=prod mix phoenix.start'
]));

gulp.task('default', ['phoenix development', 'watch']);