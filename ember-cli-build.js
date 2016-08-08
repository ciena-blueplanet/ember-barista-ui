/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },
    sassOptions: {
      includePaths: [
        'bower_components/materialize/sass'
      ]
    }
  });
  app.import('bower_components/tribute/dist/tribute.js')
  app.import('bower_components/tribute/dist/tribute.css')
  return app.toTree();
};
