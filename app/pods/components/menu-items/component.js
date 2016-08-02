import Ember from 'ember';
const {
  Component,
  $
} = Ember
export default Component.extend({
  didInsertElement() {
    $('.tooltipped').tooltip();
  },
  actions: {
    handleAction (action) {
      let args = [].slice.call(arguments,1)
      this.get('targetObject').send(action, ...args)
    }
  }
});
