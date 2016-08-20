/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'spawning-input',
  'Integration: SpawningInputComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.set('onEnter', function () {})
      this.set('onChange', function () {})

      this.render(hbs`{{spawning-input onEnter=onEnter onChange=onChange}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
