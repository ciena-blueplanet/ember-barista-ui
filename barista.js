#!/usr/bin/env node
/**
 * @author Seena Rowhani
 * @description Auto-generate test scaffolding using JIRA
 */
 
;(function (utils) {
  module.exports = {
    generate (config, scenarios) {
      utils.init()
      let elements = {}
      scenarios.forEach(e => {
        Object.assign(elements, e.elements)
      })
      return utils.compile('suite', {
        title: config.name,
        dasherized: utils.S(config.name.toLowerCase()).dasherize().s,
        camelized: config.name,
        elements,
        scenarios,
        hasElements: !!Object.keys(elements).length
      })
    }
  }
})(
  require('./utils/util')
)
