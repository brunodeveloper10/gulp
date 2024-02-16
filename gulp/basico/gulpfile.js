const { series, parallel, src , dest} = require('gulp')
const gulp = require('gulp')

//alternativa
//const series = gulp.series


function copiar(cb) {
    //src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')    
        .pipe(dest('pastaB'))
    return cb();
}

let fim = cb => {
    console.log('fim');
    return cb();
}

module.exports.default = series(copiar,
                                fim)