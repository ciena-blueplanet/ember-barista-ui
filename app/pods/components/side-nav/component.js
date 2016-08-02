import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  tagName: 'ul',
  classNames: ['side-nav'],
  didInsertElement () {
    this.element.id = 'slide-out'
    $(".button-collapse").sideNav();
  }
});
