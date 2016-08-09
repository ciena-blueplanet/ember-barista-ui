import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: [
    'scenario',
    'collection-item'
  ],
  didInsertElement () {
    this._super(...arguments)
    this.set('name', this.get('scenario.name'))
  },
  actions: {
    tributeReplaced (e) {
      let v = $(e.detail).data('value')
      this.get('scenario.elements').pushObject(v)
    },
    focusOut (e) {
      this.set('scenario.content', e.replace(/"([^"]*)"close/g, '"$1"'))
    },
    valueChanged (e) {
      this.set('scenario.name', e)
    }
  }
});
