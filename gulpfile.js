var gulp = require('gulp');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'E:\\js\\project'
        }
    })
});
gulp.task('sass', function(){
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('sass/**/*.scss', ['sass']);
});
gulp.task('default', ['watch']);
