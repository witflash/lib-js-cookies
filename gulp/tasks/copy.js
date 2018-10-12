const gulp = require('gulp');
const config = require('../config');

gulp.task('copy', () => {
  gulp.src(`${config.src.css}/*.css`).pipe(gulp.dest(config.dest.css));
  gulp.src(`${config.src.css}/lib/*.css`).pipe(gulp.dest(`${config.dest.css}/lib/`));
  gulp.src(`${config.src.js}/*.js`).pipe(gulp.dest(config.dest.js));
  gulp.src(`${config.src.js}/lib/*.js`).pipe(gulp.dest(`${config.dest.js}/lib/`));
  gulp.src(`${config.src.fonts}/**/*`).pipe(gulp.dest(config.dest.fonts));
});
