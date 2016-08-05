import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['collection sidebar-list'],
  actions: {
    updateElement (element, type, value) {
      console.log(type, value)
      element.set(type, value)
      console.log(this.get('elements'))
    },
    add (elements) {
      elements.pushObject(Ember.Object.create({
        label: '',
        type: '',
        properties: Ember.A(),
        icon: 'add'
      }))
    },
    edit () {}
  }
});
