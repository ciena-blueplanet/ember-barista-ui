;(function (gulp, pkg, release, exec) {
  gulp.task('deploy', function (callback) {
    var file = pkg.name + "-" + pkg.version + ".zip"
    var compileCmd = 'npm run compile'
    var zipCmd = 'for i in electron-builds/*/; do zip -r "${i%/}.zip" "$i"; done;'
    exec(compileCmd, function (err, stdout, stderr) {
      console.log('Running compile')
      exec(zipCmd, function (err, stdout, stderr) {
        console.log('Running zip')
        gulp.src('./electron-builds/*.zip')
          .pipe(release(pkg))
        callback()
      })
    })
  })
})(
  require('gulp'),
  require('./package.json'),
  require('github-release'),
  require('child_process').exec
)
