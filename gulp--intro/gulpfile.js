const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
// const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
// const gulp = require('gulp');
// import gulpSass from 'gulp-sass';
// import sourcemaps from 'gulp-sourcemaps';
// import del from 'del';
// import imagemin from 'gulp-imagemin';
// import concat from 'gulp-concat';

function watchFiles(){
  gulp.watch('./src/scss/**/*.scss', sass)
  gulp.watch('./src/images/**/*.scss', images)
  gulp.watch('./src/**/*.html', html)
  gulp.watch('./src//js/**/*.js', js)
}

function sass(){
    
     return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpSass.sync({outputStyle: 'compressed'}).on('error', gulpSass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./dist/css"))
}

function html(){
  return gulp.src('./src/**/*.html')
  .pipe(gulp.dest('./dist'))
}

function images(){
  return gulp.src('./src/images/**/*.*')
  // .pipe(imagemin())
  .pipe(gulp.dest('./dist/images'))
}

function clean(){
  return del('./dist/**/*.*')
}

function js(){
  return gulp.src(['./src/js/sum.js', './src/js/app.js'])
  .pipe(concat('all.js'))
  .pipe(babel({
    presets: [
      ['env', {
        'targets': {
          'browsers': ['> 1%', 'last 2 versions']
        }
      }]
    ]
  }))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.series(clean,gulp.parallel(sass, html, images, js))
exports.watch = watchFiles;