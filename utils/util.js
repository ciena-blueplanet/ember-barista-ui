/**
 * Convenience tool for this convenience tool.
 * @param chalk      - Makes text pretty
 * @param inquire    - prompting
 * @param Handlebars - Powerful template compiler
 * @param S          - string.js
 * @param fs         - node filesystem
 * @param types      - exec sync
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
          content += `describe('${S(scenario.name.replace(/\r?\n|\r/g, '')).humanize().s}', function () {\n`
          scenario.tests.forEach(test => {
            content += `it('${test.content.replace(/\r?\n|\r/g, '')}', function () {\n`
            test.properties.forEach(prop => {
              if(prop.value.trim())
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
            if (types[el.type].type === 'container') {

            }
            else if (types[el.type]) {
              content += `${S(name).camelize().s}: ${types[el.type].type}(hook('${name}'))${elem[elem.length-1] !== el ? ',\n' : ''}`
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
          if (el.type) {
            if (types[el.type].type === 'container') {
              // TODO: impliment implicit
            }
            else if (types[el.type] && !o[types[el.type].type]) {
              return o[types[el.type].type] = true
            }
          }
        })
        elem.forEach(el => {
          content += `${types[el.type].type}${elem[elem.length-1] !== el ? ',\n' : ''}`
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
    compile (template, data) {
      return new Promise((resolve, reject) => {
        try {
          resolve(beautify(Handlebars.compile(require(`../templates/${template}`))(data), {
            indent_size: 2,
            space_after_anon_function: true,
            max_preserve_newlines: 2,
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
