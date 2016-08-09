#!/usr/bin/env node
/**
 * @author Seena Rowhani
 * @description Auto-generate test scaffolding using JIRA
 */
;(function (utils) {
  module.exports = {
    generate (scenarios) {
      utils.init()
      console.log(scenarios)
      let name = 'Testing Name'
      let elements = {}
      scenarios.forEach(function (e) {
        Object.assign(elements, e.elements)
      })
      utils.compile('suite', {
        title: name,
        dasherized: utils.S(name.toLowerCase()).dasherize().s,
        camelized: name,
        elements,
        scenarios,
      }).then(file => {
        utils.fs.writeFileSync('testfile.js', file)
      })
    }
  }
})(
  require('./utils/util')
);
