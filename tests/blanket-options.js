/* globals blanket, module */

var options = {
  modulePrefix: 'ember-barista-ui',
  filter: '//.*ember-barista-ui/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: false,
  cliOptions: {
    reporters: ['lcov'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
