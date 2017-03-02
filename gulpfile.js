
var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('prod', function() {
    var target = gulp.src('index.html');
    var sources = gulp.src(['prod.js'], {
        read: false
    }, {
        relative: true
    });
    return target.pipe(inject(sources, {
        addRootSlash: false,
        addPrefix: '.'
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('dev', function() {
    var target = gulp.src('index.html');
    var sources = gulp.src(['dev.js'], {
        read: false
    }, {
        relative: true
    });
    return target.pipe(inject(sources, {
        addRootSlash: false,
        addPrefix: '.'
    }))
    .pipe(gulp.dest('.'));
});
