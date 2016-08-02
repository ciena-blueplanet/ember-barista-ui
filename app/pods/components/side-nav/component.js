import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['side-nav'],
  didInsertElement () {
    this.element.id = 'slide-out'
    $(".button-collapse").sideNav();
  }
});
