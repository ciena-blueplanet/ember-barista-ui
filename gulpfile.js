var gulp = require('gulp')
gulp.task('deploy', function(){
  var pkg = require('./package.json'),
    release = require('github-release');

  gulp.src('./electron-builds/ember-barista-ui-darwin-x64.zip')
    .pipe(release(pkg));
});
