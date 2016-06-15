var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

gulp.task('templateCache', function () {
  return gulp.src('az-helpers/**/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('dist'))
  ;
});
