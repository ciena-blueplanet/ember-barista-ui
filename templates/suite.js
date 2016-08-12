module.exports =
`import chai from 'chai'
import sinon from 'sinon'
import hook from 'ember-hook'

import {
  beforeEach,
  afterEach,
  it
} from 'mocha'

import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

import {
create{{#if elements}},{{/if}}
{{imports elements}}
} from 'ember-cli-page-object'

const expect = chai.expect
{{#if elements}}
const PageObject = create({
  {{page elements}}
})
const {
  {{destructure elements}}
} = PageObject
{{/if}}

describe('Acceptance: {{title}}', function () {
  let application
  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })
  {{describe scenarios}}
})
`
