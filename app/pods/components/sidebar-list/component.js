import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['collection sidebar-list'],
  actions: {
    addProperty (elements, name) {
      if (!name) return;
      elements.pushObject({
        value: {
          icon: 'queue'
        }
      })
    }
  }
});
