const { series, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const uglyfycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


function transformacaoCSS() {
    
    return gulp.src('src/sass/index.scss')    
            .pipe(sass().on('error', sass.logError))
            .pipe(uglyfycss({ "uglyComments": true }))
            .pipe(concat('estilo.min.css'))
            .pipe(gulp.dest('build/css'))
}

function copiarCss(){
    return gulp.src('src/index.html')
           .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarCss)