import Ember from 'ember'

export default Ember.Component.extend({
  id: 'editElement',
  attributeBindings: ['id'],
  classNames: [
    'modal',
    'bottom-sheet',
    'modal-fixed-footer'
  ],
  actions: {
    add (value) {
      if (value) {
        this.get('el.properties').pushObject({
          value: ''
        })
      }
    }
  }
})
