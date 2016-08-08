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
      let details = e.details;
      this.get('scenario.elements').push(details)
    }
  }
});
