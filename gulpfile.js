var gulp = require('gulp');
var connect = require('gulp-connect');

// поднимаем сервачек
gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 9100,
        livereload: false
    });
});
