import Ember from 'ember';

const {
  Component,
  run
} = Ember

export default Component.extend({
  elementService: Ember.inject.service(),
  tagName: 'div',
  classNames: ['content'],
  types: [
    'Text Field',
    'Button',
    'Link',
    'Page'
  ],
  actions: {
    updateElement (element, type, value) {
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
      this.set('elementService.element', el)
      $('#editElement').openModal()
    },
    delete (elements, el) {
        this.set('elements', elements.removeObject(el))
    },
    reorderItems(elements, dragged) {
      this.set('elements', elements)
   }
  }
});
