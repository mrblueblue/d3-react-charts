
var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var webpack = require('webpack-stream');
var serve = require('browser-sync');

var paths = {
  app: path.join(__dirname, 'components'),
  entry: path.join(__dirname, 'index.js'),
  output: path.join(__dirname, 'dist')
};

gulp.task('build', ['webpack:build', 'serve'])

gulp.task('webpack:build', function(callback){
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
  callback();
});

gulp.task('serve', function(){
  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: {
      baseDir: __dirname
    }
  });
  gulp.watch('src/dist/*', serve.reload)
});

gulp.task('lint', function(){
  return gulp.src(paths.app)
    .pipe(eslint({
      envs: {
        browser: true,
        es6: true
      },
      rules: {
        'quotes': [2, 'single', 'avoid-escape']
      }
    }))
    .pipe(eslint.format());
});

gulp.task('watch', function(){
  gulp.watch(paths.app, ['lint']);
});

gulp.task('default', ['build', 'lint', 'watch']);
