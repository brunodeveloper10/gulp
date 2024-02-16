const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    //o babel transpila o javascript mais novo para um versão compatível
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env']
        }))
        .on('error', error=> console.log(error))
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

        return cb();
}

function fim(cb) {
    console.log('fim');
    return cb();
}

exports.default = series(padrao, fim)