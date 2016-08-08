import Ember from 'ember';

const {
  Component
} = Ember

export default Component.extend({
  tagName: 'ul',
  classNames: ['collection sidebar-list'],
  actions: {
    updateElement (element, type, value) {
      element.set(type, value)
      this.set('elements', Object.assign([], this.get('elements')))
    },
    add (elements) {
      elements.pushObject(Ember.Object.create({
        label: '',
        type: '',
        properties: Ember.A(),
        icon: 'add'
      }))
      this.set('elements', elements)
    },
    edit () {}
  }
});
