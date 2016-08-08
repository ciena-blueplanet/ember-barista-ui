import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [
    'scenario',
    'card',
    'col',
    's4'
  ],
  actions: {
    tributeReplaced (e) {
      console.log(e);
      this.get('scenario.elements').pushObject(e.detail)
    }
  }
});
