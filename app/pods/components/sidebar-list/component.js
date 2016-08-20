import Ember from 'ember'

const {
  Component,
  A
} = Ember

export default Component.extend({
  tagName: 'div',
  classNames: ['content'],
  types: A(),
  actions: {
    updateElement (element, type, value) {
      if (value.trim()) {
        this.set('elements', Object.assign([], this.get('elements')))
      }
    },
    add (elements) {
      elements.pushObject(Ember.Object.create({
        label: '',
        type: 'Text Field',
        properties: Ember.A([
          {
            value: ''
          }
        ]),
        icon: 'add'
      }))
    },
    delete (elements, el) {
      this.set('elements', elements.removeObject(el))
    },
    reorderItems (elements, dragged) {
      this.set('elements', elements)
    }
  }
})
