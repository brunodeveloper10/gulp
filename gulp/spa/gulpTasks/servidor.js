const gulp = require('gulp');
const webserver = require('gulp-webserver')
const gulpwhatch = require('gulp-watch');
const watch = require('gulp-watch');

function servidor(){
    return gulp.src('build')
           .pipe(webserver({
                port: 8080,
                open: true,
                livereload: true
           })) ;
}

function monitorarArquivos(cb){
    watch('src/**/*.html', ()=> gulp.series('appHTML')())
    watch('src/**/*.scss', ()=> gulp.series('appCSS')())
    watch('src/**/*.png', ()=> gulp.series('appImg')())
    watch('src/assets/imgs/**/*.js', ()=> gulp.series('appJS')())

    return cb()
}

module.exports = {
    servidor,
    monitorarArquivos
}