#!/usr/bin/env node
/**
 * @author Seena Rowhani
 * @description Auto-generate test scaffolding using JIRA
 */
;(function (utils) {
  module.exports = {
    generate (scenarios) {
      utils.init()
      let name = 'Testing Name'
      let elements = {}
      scenarios.forEach(function (e) {
        Object.assign(elements, e.elements)
      })
      return utils.compile('suite', {
        title: name,
        dasherized: utils.S(name.toLowerCase()).dasherize().s,
        camelized: name,
        elements,
        scenarios,
        hasElements: !!Object.keys(elements).length
      })
    }
  }
})(
  require('./utils/util')
);
