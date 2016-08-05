import Ember from 'ember';

export default Ember.Component.extend({
  id: 'addScenario',
  attributeBindings: ['id'],
  classNames: ['modal'],
  actions: {
    handleChange (e) {
      Materialize.toast(this.$('select').val(), 4000)
    }
  }
});
