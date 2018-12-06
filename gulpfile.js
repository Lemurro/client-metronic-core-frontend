var gulp        = require('gulp');           // Сам Gulp JS
var cleanCSS    = require('gulp-clean-css'); // Минификация CSS
var concat      = require('gulp-concat');    // Склейка файлов
var rename      = require('gulp-rename');    // Переименование файлов
var uglify      = require('gulp-uglify');    // Минификация JS
var del         = require('del');            // Удаление файлов
var runSequence = require('run-sequence');   // Выполнение gulp-задач по очереди

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
    'node_modules/template7/dist/template7.min.js'
];

// TASKS

gulp.task('default', function () {
    runSequence('build', ['watcher.css', 'watcher.js']);
});
gulp.task('build', function () {
    runSequence(
        'core.css',
        'core.min.css',
        'concat.css',
        'concat.min.css',
        'core.js',
        'core.min.js',
        'concat.js',
        'concat.min.js',
        'clean'
    );
});

// CLEAN

gulp.task('clean', function () {
    var files = [
        'dist/core.css',
        'dist/core.min.css',
        'dist/core.js',
        'dist/core.min.js'
    ];

    return del(files, {
        force: true
    });
});

// WATCHER

gulp.task('watcher.css', function () {
    return gulp.watch('src/css/*.css', function () {
        runSequence(
            'core.css',
            'core.min.css',
            'concat.css',
            'concat.min.css',
            'clean'
        );
    });
});

gulp.task('watcher.js', function () {
    return gulp.watch('src/js/**/*.js', function () {
        runSequence(
            'core.js',
            'core.min.js',
            'concat.js',
            'concat.min.js',
            'clean'
        );
    });
});

// CSS

gulp.task('core.css', function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('core.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('core.min.css', function () {
    return gulp.src('dist/core.css')
        .pipe(cleanCSS())
        .pipe(rename('core.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat.css', function () {
    cssLibs.push('dist/core.css');

    return gulp.src(cssLibs)
        .pipe(concat('lemurro.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat.min.css', function () {
    cssLibsMin.push('dist/core.min.css');

    return gulp.src(cssLibsMin)
        .pipe(concat('lemurro.min.css'))
        .pipe(gulp.dest('dist'));
});

// JS

gulp.task('core.js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('core.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('core.min.js', function () {
    return gulp.src('dist/core.js')
        .pipe(uglify())
        .pipe(rename('core.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat.js', function () {
    jsLibs.push('dist/core.js');

    return gulp.src(jsLibs)
        .pipe(concat('lemurro.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat.min.js', function () {
    jsLibsMin.push('dist/core.min.js');

    return gulp.src(jsLibsMin)
        .pipe(concat('lemurro.min.js'))
        .pipe(gulp.dest('dist'));
});