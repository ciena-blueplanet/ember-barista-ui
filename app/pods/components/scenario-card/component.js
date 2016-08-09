import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: [
    'scenario',
    'collection-item',
  ],
  actions: {
    tributeReplaced (e) {
      this.get('scenario.elements').pushObject(e.detail)
    }
  }
});
