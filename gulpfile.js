const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');

const styles = () => {
    return src('./src/styles/sass/*.scss')
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(dest('./src/styles/css/'));
}

const watcher = () => {
    return watch(['./src/styles/sass/**/*.scss'], styles);
}

exports.default = series(watcher, styles);