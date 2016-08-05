import Ember from 'ember';
const {
  Component,
  $
} = Ember;

export default Component.extend({
  didInsertElement () {
    this.$('input').focus()
    $('select').material_select();
  },
  types: [
    'Textfield',
    'Button',
    'Link',
    'Page'
  ]
});
