import Ember from 'ember';
const {
  Component,
  $
} = Ember
export default Component.extend({
  actions: {
    handleAction (action) {
      let args = [].slice.call(arguments,1)
      this.get('targetObject').send(action, ...args)
    }
  }
});
