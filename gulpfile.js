var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){

});

gulp.task('watch', function(){
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });

    watch('./index.html', function(){
        browserSync.reload();
    });

    watch('./style.css', function(){
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', function(){
    return gulp.src('./style.css').pipe(browserSync.stream());
});