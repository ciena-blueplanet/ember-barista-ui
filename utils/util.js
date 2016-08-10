/**
 * Convenience tool for this convenience tool.
 * @param chalk      - Makes text pretty
 * @param inquire    - prompting
 * @param Handlebars - Powerful template compiler
 * @param S          - string.js
 * @param fs         - node filesystem
 * @param types      - exec sync
 * @param types      - list of types to translate to ember-cli-page-object
 * @param package    - package.json
 * @return util
 */
;(function (chalk, Handlebars, S, fs, exec, types, pkg, beautify) {
  let object = {}
  module.exports = {
    // = Properties =================
    chalk,
    Handlebars,
    S,
    fs,
    exec,
    pkg,
    object,
    // = Methods =================
    init () {
      Handlebars.registerHelper('describe', function (elem, options) {
        let content = ''
        elem.forEach(scenario => {
          content += `describe('${S(scenario.name.replace(/\r?\n|\r/g, '')).dasherize().s}', function () {\n`
          scenario.tests.forEach(test => {
            content += `it('${test.content.replace(/\r?\n|\r/g, '')}', function () {\n`
            test.properties.forEach(prop => {
              content += `// TODO: ${prop.value}\n`
            })
            content += '\n})\n'
          })
          content += '\n})\n'
        })
        return new Handlebars.SafeString(content)
      })
      Handlebars.registerHelper('page', function (elem, options) {
        let content = ''
        elem = Object.keys(elem).map(e =>elem[e])
        elem.forEach(el => {

          let name = S(el.label.toLowerCase()).dasherize().s
          if (el.type) {
            let type = el.type.toLowerCase().trim()
            if (types[type]) {
              content += `${S(name).camelize().s}: ${types[type]}(hook('${name}'))${elem[elem.length-1] !== el ? ',\n' : ''}`
            }
          }
        })
        return new Handlebars.SafeString(content)
      })
      Handlebars.registerHelper('destructure', function (elem) {
        let content = ''

        elem = Object.keys(elem).map(e => elem[e])
        elem.forEach(el => {
          let name = S(el.label.toLowerCase()).dasherize().s

          content += `${S(name).camelize().s}${elem[elem.length-1] !== el ? ',\n' : ''}`
        })
        return new Handlebars.SafeString(content)

      })
      Handlebars.registerHelper('imports', function (elem, options) {
        let content = ''
        let o = {}
        elem = Object.keys(elem).map(e => elem[e])
        elem = elem.filter(el => {
          if (el['type']) {
            let type = el['type'].toLowerCase()
            if (types[type] && !o[types[type]]) {
              return o[types[type]] = true
            }
          }
        })
        elem.forEach(el => {
          let type = el['type'].toLowerCase()
          content += `${types[type]}${elem[elem.length-1] !== el ? ',\n' : ''}`
        })
        return new Handlebars.SafeString(content)
      })
    },
    error (err) {
      console.error(chalk.red.bold(err))
      process.exit(1)
    },
    log (msg) {
      console.log(chalk.cyan(msg))
    },
    prompt (prompts) {
      return inquire.prompt(prompts)
    },
    debug (msg) {
      if (this.config.debug) {
        this.log(`DEBUG: ${msg}`)
      }
    },
    string (text, method) {
      return S(text)[method]().s
    },
    preparse (obj) {
      let str = obj.body.replace(
        /([\w\W]+)Acceptance Criteria:([\w\W]+)/,
        'Acceptance Criteria:$2'
      )
      let pretext = str.replace(/([\w\W]+)Scenarios:([\w\W]+)/, '$1')
      let scenarios = str.replace(/([\w\W]+)Scenarios:([\w\W]+)/, '$2')
      scenarios.split('\n')
        .forEach(e => {
          let matches = e.match(/"\w+"/g)

          if (matches && e.indexOf('-') < 0) {
            let m = matches.map(el => {
                try {
                  return el.replace(/"(.*)"/, '$1').replace('\r', '')
                } catch (e) {
                  return ''
                }
            })
            object[e] = m
          }
        })
      obj.body = pretext
      return obj
    },
    validate (obj) {
      return typeof obj === 'object'
    },
    compile (template, data) {
      return new Promise((resolve, reject) => {
        try {
          resolve(beautify(Handlebars.compile(require(`../templates/${template}`))(data), {
            indent_size: 2,
            "space_after_anon_function": true
          }))
        } catch (e) {
          console.log(e.stack)
          reject(e)
        }
      })
    },
    write: fs.writeFileSync,
  }
})(
  require('chalk'),
  require('handlebars'),
  require('string'),
  require('fs'),
  require('child_process').execSync,
  require('./pagetypes'),
  require('../package.json'),
  require('js-beautify').js_beautify
);
