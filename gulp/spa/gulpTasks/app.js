const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('src/**/*.html')
            .pipe(htmlmin({ collapseWhitespace: true}))
            .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(uglifycss({ "uglyComments": true }))
            .pipe(concat('app.min.css'))
            .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/navegacao.js')
            .pipe(babel({presets: ['env']}))
            .pipe(uglifycss( { "uglyComments": true }))
            .pipe(concat('app.min.js'))
            .pipe(gulp.dest('build/assets/js'))

}

function appImg() {
    return gulp.src('src/assets/imgs/*.*')
           .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appJS', appJS)
gulp.task('appCSS', appCSS)
gulp.task('appImg', appImg)

module.exports = {
    appCSS,
    appImg,
    appJS,
    appHTML
}