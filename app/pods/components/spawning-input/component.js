import Ember from 'ember'
const {
  Component,
  run
} = Ember

export default Component.extend({
  didInsertElement () {
    this._super(...arguments)
    run.schedule('sync', this, () => {
      this.$('.ember-text-field').focus()
    })
  }
})
