import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: [
    'scenario',
    'collection-item',
  ],

  changeObserve: function () {
    let v = this.get('value');
    v = v.replace(/"([^"]*)"close/g, '"$1"')
    this.set('scenario.content', v)
  }.observes('value'),
  actions: {
    tributeReplaced (e) {
      let v = $(e.detail).data('value')
      this.get('scenario.elements').pushObject(v)
    }
  }
});
