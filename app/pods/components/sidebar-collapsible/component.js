import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement () {
    this.$('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  },
  actions: {
    addProperty (props, name) {
      const property = props.findBy('isFocused', true)
      property.setProperties({
        name,
        isFocused: false
      })
      props.addObject(Ember.Object.create({
        name: '',
        isFocused: true
      }))
    }
  }
});
