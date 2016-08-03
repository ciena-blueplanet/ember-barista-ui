import Ember from 'ember';
const {
  Component
} = Ember;

export default Component.extend({
  didInsertElement () {
    if (this.get('isFocused'))
      this.$('input').focus()
  }
});
