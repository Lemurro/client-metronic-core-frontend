var gulp     = require('gulp');           // Сам Gulp JS
var cleanCSS = require('gulp-clean-css'); // Минификация CSS
var concat   = require('gulp-concat');    // Склейка файлов
var rename   = require('gulp-rename');    // Переименование файлов
var sort     = require('gulp-sort');      // Сортировка списка файлов
var uglify   = require('gulp-uglify');    // Минификация JS
var del      = require('del');            // Удаление файлов

var cssLibs = [
    'node_modules/jquery-lightajax/dist/jquery.lightajax.css'
];

var cssLibsMin = [
    'node_modules/jquery-lightajax/dist/jquery.lightajax.min.css'
];

var jsLibs = [
    'node_modules/bowser/bundled.js',
    'node_modules/dimns-is-empty-js/dist/isEmpty.js',
    'node_modules/jquery-lightajax/dist/jquery.lightajax.js',
    'node_modules/jquery-tablefilter/dist/jquery.tablefilter.js',
    'node_modules/localforage/dist/localforage.js',
    'node_modules/navigo/lib/navigo.js',
    'node_modules/select2/dist/js/i18n/ru.js',
    'node_modules/simple-ajax-uploader/SimpleAjaxUploader.js',
    'node_modules/template7/dist/template7.js'
];

var jsLibsMin = [
    'node_modules/bowser/bundled.js',
    'node_modules/dimns-is-empty-js/dist/isEmpty.min.js',
    'node_modules/jquery-lightajax/dist/jquery.lightajax.min.js',
    'node_modules/jquery-tablefilter/dist/jquery.tablefilter.min.js',
    'node_modules/localforage/dist/localforage.min.js',
    'node_modules/navigo/lib/navigo.min.js',
    'node_modules/select2/dist/js/i18n/ru.js',
    'node_modules/simple-ajax-uploader/SimpleAjaxUploader.min.js',
    'node_modules/template7/dist/template7.min.js'
];

// CLEAN

function clean() {
    var files = [
        'dist/core.css',
        'dist/core.min.css',
        'dist/core.js',
        'dist/core.min.js'
    ];

    return del(files, {
        force: true
    });
}

// WATCHER

function watcherCSS() {
    return gulp.watch('src/css/*.css', gulp.series(coreCSS, coreMinCSS, concatCSS, concatMinCSS, clean));
}

function watcherJS() {
    return gulp.watch('src/js/**/*.js', gulp.series(coreJS, coreMinJS, concatJS, concatMinJS, clean));
}

// CSS

function coreCSS() {
    return gulp.src('src/css/*.css')
        .pipe(sort())
        .pipe(concat('core.css'))
        .pipe(gulp.dest('dist'));
}

function coreMinCSS() {
    return gulp.src('dist/core.css')
        .pipe(cleanCSS())
        .pipe(rename('core.min.css'))
        .pipe(gulp.dest('dist'));
}

function concatCSS() {
    cssLibs.push('dist/core.css');

    return gulp.src(cssLibs)
        .pipe(concat('lemurro.css'))
        .pipe(gulp.dest('dist'));
}

function concatMinCSS() {
    cssLibsMin.push('dist/core.min.css');

    return gulp.src(cssLibsMin)
        .pipe(concat('lemurro.min.css'))
        .pipe(gulp.dest('dist'));
}

// JS

function coreJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(sort())
        .pipe(concat('core.js'))
        .pipe(gulp.dest('dist'));
}

function coreMinJS() {
    return gulp.src('dist/core.js')
        .pipe(uglify())
        .pipe(rename('core.min.js'))
        .pipe(gulp.dest('dist'));
}

function concatJS() {
    jsLibs.push('dist/core.js');

    return gulp.src(jsLibs)
        .pipe(concat('lemurro.js'))
        .pipe(gulp.dest('dist'));
}

function concatMinJS() {
    jsLibsMin.push('dist/core.min.js');

    return gulp.src(jsLibsMin)
        .pipe(concat('lemurro.min.js'))
        .pipe(gulp.dest('dist'));
}

// TASKS

gulp.task('build', gulp.series(
    gulp.parallel(
        gulp.series(coreCSS, coreMinCSS, concatCSS, concatMinCSS),
        gulp.series(coreJS, coreMinJS, concatJS, concatMinJS)
    ), clean
));

gulp.task('watcher', gulp.series('build', gulp.parallel(watcherCSS, watcherJS)));