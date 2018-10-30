const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const glob = require('glob');
const merge = require('gulp-merge-json');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minify');
const htmlclean = require('gulp-htmlclean');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const flatten = require('gulp-flatten');
const smartgrid = require('smart-grid');
const cssVip = require("gulp-css-vip");
const watch = require('gulp-watch');
const batch = require('gulp-batch');

var settings = {
    outputStyle: 'scss',
    columns: 12,
    mobileFirst: false,
    container: {
        maxWidth: '1200px'
    },
    breakPoints: {
        xlg: {
            width: '1600px'
        },
        lg: {
            width: '1200px'
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px'
        },
        xs: {
            width: '560px'
        }
    }
};

gulp.task('smartgrid', function() {

    smartgrid('app/libraries/smart_grid', settings);

});

gulp.task('sass', function() {

    gulp.src(['app/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dev'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('js', function() {
    gulp.src(['app/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dev'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('fonts', function() {
    gulp.src(['app/fonts/**'])
        .pipe(flatten())
        .pipe(gulp.dest('dev/fonts'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('images', () =>
    gulp.src('app/images/**')
    .pipe(imagemin([
        imageminMozjpeg({
            quality: 70
        }),
        imageminPngquant({
            speed: 1,
            quality: 70
        })
    ]))
    .pipe(gulp.dest('dev/images'))
    .pipe(browserSync.reload({
        stream: true
    }))
);


gulp.task('compile', function() {
    // var templatesArray = glob.sync('./app/**/*.handlebars');
    //templatesArray = templatesArray.map(item => item.replace(/\/[A-Za-z]+\.[a-z]+/, ''));
    //console.log(templatesArray);

    // gulp.src('./app/**/*.json')
    //.pipe(merge())
    // .pipe(gulp.dest('./app'));

    /* var options = {
         ignorePartials: false,
         batch: templatesArray,
         helpers: {
             capitals: function(str) {
                 return str.toUpperCase();
             }
         }
     }*/

    //var templateData = {};

    gulp.src('app/index.html')
        //.pipe(handlebars(templateData, options))
        //.pipe(rename('index.html'))
        .pipe(gulp.dest('dev'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'dev'
        }
    });
});

gulp.task('production', function() {
    gulp.start('sass');
    gulp.start('js');
    gulp.start('compile');

    gulp.src(['dev/fonts/**'])
        .pipe(flatten())
        .pipe(gulp.dest('dist/fonts'));

    gulp.src(['dev/styles.css'])
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest('dist'));

    gulp.src(['dev/main.js'])
        .pipe(minify())
        .pipe(gulp.dest('dist'));

    gulp.src(['dev/images/**/*'])
        .pipe(gulp.dest('dist/images'));

    gulp.src(['dev/index.html'])
        .pipe(htmlclean())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    watch('app/**/*.scss', batch(function(events, done) {
        gulp.start('sass', done);
    }));
    watch('./app/**/*.js', batch(function(events, done) {
        gulp.start('js', done);
    }));
    watch('./app/**/*.html', batch(function(events, done) {
        gulp.start('compile', done);
    }));
    watch('./app/fonts/**', batch(function(events, done) {
        gulp.start('fonts', done);
    }));
    watch('./app/images/**', batch(function(events, done) {
        gulp.start('images', done);
    }));
});

gulp.task('default', ['watch', 'browser-sync']);