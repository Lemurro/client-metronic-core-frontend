var gulp     = require('gulp');           // Сам Gulp JS
var cleanCSS = require('gulp-clean-css'); // Минификация CSS
var concat   = require('gulp-concat');    // Склейка файлов
var rename   = require('gulp-rename');    // Переименование файлов
var uglify   = require('gulp-uglify');    // Минификация JS
var del      = require('del');            // Удаление файлов

// TASKS

gulp.task('default', ['build', 'watcher.css', 'watcher.js']);
gulp.task('build', ['css', 'js']);

// WATCHER

gulp.task('watcher.css', function () {
    return gulp.watch('src/css/*.css', ['css']);
});

gulp.task('watcher.js', function () {
    return gulp.watch('src/js/**/*.js', ['js']);
});

// CSS

gulp.task('core.css', function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('core.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('core.min.css', ['core.css'], function () {
    return gulp.src('dist/core.css')
        .pipe(cleanCSS())
        .pipe(rename('core.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat.css', ['core.min.css'], function () {
    var files = [
        'node_modules/jquery-lightajax/dist/jquery.lightajax.css',
        'dist/core.css'
    ];

    return gulp.src(files)
        .pipe(concat('lemurro.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat.min.css', ['concat.css'], function () {
    var files = [
        'node_modules/jquery-lightajax/dist/jquery.lightajax.min.css',
        'dist/core.min.css'
    ];

    return gulp.src(files)
        .pipe(concat('lemurro.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', ['concat.min.css'], function () {
    return del(['dist/core.css', 'dist/core.min.css'], {
        force: true
    });
});

// JS

gulp.task('core.js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('core.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('core.min.js', ['core.js'], function () {
    return gulp.src('dist/core.js')
        .pipe(uglify())
        .pipe(rename('core.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat.js', ['core.min.js'], function () {
    var files = [
        'node_modules/bowser/bundled.js',
        'node_modules/dimns-is-empty-js/dist/isEmpty.js',
        'node_modules/jquery-lightajax/dist/jquery.lightajax.js',
        'node_modules/jquery-tablefilter/dist/jquery.tablefilter.js',
        'node_modules/localforage/dist/localforage.js',
        'node_modules/select2/dist/js/i18n/ru.js',
        'node_modules/simple-ajax-uploader/SimpleAjaxUploader.js',
        'node_modules/template7/dist/template7.js',
        'dist/core.js'
    ];

    return gulp.src(files)
        .pipe(concat('lemurro.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat.min.js', ['concat.js'], function () {
    var files = [
        'node_modules/bowser/bundled.js',
        'node_modules/dimns-is-empty-js/dist/isEmpty.min.js',
        'node_modules/jquery-lightajax/dist/jquery.lightajax.min.js',
        'node_modules/jquery-tablefilter/dist/jquery.tablefilter.min.js',
        'node_modules/localforage/dist/localforage.min.js',
        'node_modules/select2/dist/js/i18n/ru.js',
        'node_modules/simple-ajax-uploader/SimpleAjaxUploader.min.js',
        'node_modules/template7/dist/template7.min.js',
        'dist/core.min.js'
    ];

    return gulp.src(files)
        .pipe(concat('lemurro.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', ['concat.min.js'], function () {
    return del(['dist/core.js', 'dist/core.min.js'], {
        force: true
    });
});