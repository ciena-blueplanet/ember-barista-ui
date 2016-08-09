import Ember from 'ember';

const {
  Component,
  run
} = Ember

export default Component.extend({
  tagName: 'div',
  classNames: ['content'],
  actions: {
    updateElement (element, type, value) {
      element.set(type, value)
      this.set('elements', Object.assign([], this.get('elements')))
    },
    add (elements) {
      elements.pushObject(Ember.Object.create({
        label: 'New Element',
        type: 'Text Field',
        properties: Ember.A(),
        icon: 'add'
      }))
    },
    edit (el) {
      Materialize.toast(`Edit`, 4000)
    },
    delete (elements, el) {
        this.set('elements', elements.removeObject(el))
    },
    reorderItems(elements, dragged) {
      this.set('elements', elements)
   }
  }
});
