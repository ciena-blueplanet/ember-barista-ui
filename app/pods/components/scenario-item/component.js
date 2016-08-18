import Ember from 'ember'

export default Ember.Component.extend({
  tagName: 'li',
  classNames: [
    'scenario',
    'collection-item'
  ],
  didInsertElement () {
    this.$('.collapsible').collapsible({
      accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    })
  },
  actions: {
    valueChanged (e) {
      this.set('scenario.name', e)
    },
    delete () {
      this.get('targetObject').send('deleteScenario', this.get('scenario'))
    },
    create () {
      this.get('scenario.tests').pushObject({
        content: '',
        properties: Ember.A([{
          value: ''
        }])
      })
    }
  }
})
