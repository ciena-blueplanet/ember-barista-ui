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
  page: visitable(hook('page'))
})
const {
  button,
  link,
  page
} = PageObject

describe('Acceptance: Testing Name', function () {
  let application
  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })
  describe('-scenario-name', function () {
    it('"Button" is able to click.', function () {
      // TODO: 
      // TODO: 1
      // TODO: 1
      // TODO: 1

    }) it('"Link" is visitable', function () {
      // TODO: 

    })
  }) describe('-scenario-2', function () {
    it('"Page" is easy to visit', function () {
      // TODO: 

    })
  })
})