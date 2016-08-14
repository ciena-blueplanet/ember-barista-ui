import Ember from 'ember';

const {
  Component,
  run
} = Ember

export default Component.extend({
  tagName: 'div',
  classNames: ['content'],
  types: [
    'Text Field',
    'Button',
    'Link',
    'Page',
    'List Record'
  ],
  actions: {
    updateElement (element, type, value) {
      this.set('elements', Object.assign([], this.get('elements')))
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
    reorderItems(elements, dragged) {
      this.set('elements', elements)
   }
  }
});
