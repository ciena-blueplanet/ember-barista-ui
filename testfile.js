import chai from 'chai'
import sinon from 'sinon'

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
  'button': clickable('.button'),
  'text-field': fillable('.text-field'),
  'page': visitable('.page'),

})

describe('Acceptance: Testing Name', function () {
  var application
  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })
  describe('-button-interactions', function () {
    it('"Button" will do this for "Text Field" do work properly', function () {
      let Button = new PageObject['button']
	    let TextField = new PageObject['text-field']

    })
  describe('-textfield-submits-form', function () {
    it('On enter "Text Field" will submit the page and visit "Page" ', function () {
      let Page = new PageObject['page']
	    let TextField = new PageObject['text-field']
    })

})
