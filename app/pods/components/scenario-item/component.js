import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: [
    'scenario',
    'collection-item'
  ],
  actions: {
    tributeReplaced (e) {
      let v = $(e.detail).data('value')
      let el = this.get('elements').find(function (e) {
        return e.label === v;
      })
      this.get('scenario.elements')[v] = Object.assign({}, el)

    },
    focusOut (e) {
      this.set('scenario.content', e.replace(/"([^"]*)"close/g, '"$1"'))
    },
    valueChanged (e) {
      this.set('scenario.name', e)
    }
  }
});
