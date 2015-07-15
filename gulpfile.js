var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    path = {
        js: 'src/app/**/*.js',
        scss: 'src/assets/styles/**/*.scss',
        html: 'src/**/*.html',
        mainScss: 'src/assets/styles/app.scss',
        mainJs: 'src/app/app.js'
    },
    AUTOPREFIXER_BROWSERS = [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ],
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ['src', '.tmp'],
            routes: {
                '/bower_components': 'bower_components'
            }
        },
        open: false,
        notify: false
    });
});

gulp.task('default', ['js', 'styles', 'browser-sync'], function() {
    gulp.watch(path.scss, ['styles']);
    gulp.watch(path.js, ['js']);
    gulp.watch(path.html, ['reload']);
});

gulp.task('reload', function() {
    browserSync.reload();
});

gulp.task('styles', function() {
    return gulp.src(path.mainScss)
        .pipe($.sass({
            outputStyle: 'expanded',
            precision: 10
        }).on('error', function(error) {
            console.error('SASS Error!', error.message);
        }))
        .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.if(browserSync.active, browserSync.reload({stream: true})));
});

gulp.task('jslint', function() {
    return gulp.src(path.js)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.jscs())
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail')))
        .pipe($.if(browserSync.active, browserSync.reload({stream: true})));
});

gulp.task('js', ['jslint'], function() {
    return browserify({entries: path.mainJs, debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('.tmp'));
});
