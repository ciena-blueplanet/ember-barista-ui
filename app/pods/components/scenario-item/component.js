import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: [
    'scenario',
    'collection-item'
  ],
  didInsertElement () {
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  },
  actions: {
    tributeReplaced (e) {
      let v = $(e.detail).data('value')
      let el = this.get('elements').find(function (e) {
        return e.label === v;
      })
      this.get('scenario.elements')[v] = Object.assign({}, el)
    },
    focusOut (test, e) {
      test['content'] = e.replace(/"([^"]*)"close/g, '"$1"')
    },
    valueChanged (e) {
      this.set('scenario.name', e)
    },
    delete () {
      this.get('targetObject').send('deleteScenario', this.get('scenario'))
    },
    create () {
      this.get('scenario.tests').pushObject({
        content: ''
      })
    }
  }
});
