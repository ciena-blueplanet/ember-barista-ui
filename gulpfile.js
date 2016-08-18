;(function (gulp, pkg, release, zip, exec) {
  gulp.task('deploy', function (callback) {
    var file = pkg.name + "-" + pkg.version + ".zip"
    exec('npm run compile', function (err, stdout, stderr) {
      if (err)
        callback(err);
      else
        gulp.src('./electron-builds/*')
          .pipe(zip(file, {compress: true}))
          .pipe(release(pkg))
    })
  })
})(
  require('gulp'),
  require('./package.json'),
  require('github-release'),
  require('gulp-zip'),
  require('child_process').exec
)
