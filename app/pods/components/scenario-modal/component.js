import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modal'],
  didInsertElement () {
    this.element.id = 'addScenario'
  },
  actions: {
    handleChange (e) {
      Materialize.toast(this.$('select').val(), 4000)
    }
  }
});
