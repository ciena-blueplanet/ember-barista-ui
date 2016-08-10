import chai from 'chai'
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
  create,
  clickable,
  fillable,
  visitable
} from 'ember-cli-page-object'

const expect = chai.expect

const PageObject = create({
  button: clickable(hook('button')),
  link: fillable(hook('link')),
  page: visitable(hook('page')),
  textField: fillable(hook('text-field'))
})

const {
  button,
  link,
  page,
  textField
} = PageObject

describe('Acceptance: Testing Name', function () {
  var application
  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })
  describe('-my-scenario', function () {
    it('"Button" "Text Field" "Link" "Page" ', function () {
      
    })

})
