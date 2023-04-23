const gulp = require('gulp');
const compilaSass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const maps = require('gulp-sourcemaps');


function sassToCss (){
    return gulp.src('./src/styles/main.scss')
        .pipe(maps.init())
        .pipe(compilaSass({
            outputStyle: 'compressed'
        }))
        .pipe(maps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))

}

function javascriptCompress(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))

}

function imagesCompress(){
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}



exports.default = function(){
    gulp.watch('./src/styles/main.scss', {ignoreInitial: false}, gulp.series(sassToCss));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(javascriptCompress));
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(imagesCompress));
}
