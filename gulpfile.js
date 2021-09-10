const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"//откуда запускается
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)") //задача возвращает
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // pipe означает, что с файлов будет что-то делаться; компеляция кода при помощи программы sass, стиль кода сжатый, вторая часть покажет где была ошибка если она произойдет;
        .pipe(rename({suffix: '.min', prefix: ''}))// к style.css добвляется 'min' и превращается в style.min.css
        .pipe(autoprefixer())// добавляются вендерные префиксы
        .pipe(cleanCSS({compatibility: 'ie8'}))//файл очищается от коментариев и оптимизируется
        .pipe(gulp.dest("dist/css")) //отправка адреса по адресу
        .pipe(browserSync.stream());//запуск browserSync
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));//при изменении одного из этих фйлов задускается задача
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/js/*.js").on('change', gulp.parallel('scripts'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"));
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"));
});

gulp.task('mailer', function () {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest("dist/mailer"));
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'mailer', 'html', 'images')); // парадедьно запускаются команды;