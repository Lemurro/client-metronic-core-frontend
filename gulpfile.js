var gulp     = require('gulp');           // Сам Gulp JS
var cleanCSS = require('gulp-clean-css'); // Минификация CSS
var concat   = require('gulp-concat');    // Склейка файлов
var rename   = require('gulp-rename');    // Переименование файлов
var uglify   = require('gulp-uglify');    // Минификация JS

gulp.task('default', ['build', 'watcher.css', 'watcher.js']);
gulp.task('build', ['core.css', 'core.js']);

gulp.task('watcher.css', function () {
    return gulp.watch('src/css/*.css', ['core.css']);
});

gulp.task('watcher.js', function () {
    return gulp.watch('src/js/**/*.js', ['core.js']);
});

gulp.task('core.css', function () {
    var files = [
        'node_modules/jquery-lightajax/dist/jquery.lightajax.min.css',
        'src/css/*.css'
    ];

    gulp.src(files)
        .pipe(concat('core.css'))
        .pipe(gulp.dest('dist'));

    gulp.src(files)
        .pipe(concat('core.css'))
        .pipe(cleanCSS())
        .pipe(rename('core.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('core.js', function () {
    var files = [
        'node_modules/bowser/bundled.js',
        'node_modules/dimns-is-empty-js/dist/isEmpty.min.js',
        'node_modules/jquery-lightajax/dist/jquery.lightajax.min.js',
        'node_modules/jquery-tablefilter/dist/jquery.tablefilter.min.js',
        'node_modules/localforage/dist/localforage.min.js',
        'node_modules/select2/dist/js/i18n/ru.js',
        'node_modules/template7/dist/template7.min.js',
        'src/js/**/*.js'
    ];

    gulp.src(files)
        .pipe(concat('core.js'))
        .pipe(gulp.dest('dist'));

    gulp.src(files)
        .pipe(concat('core.js'))
        .pipe(uglify())
        .pipe(rename('core.min.js'))
        .pipe(gulp.dest('dist'));
});