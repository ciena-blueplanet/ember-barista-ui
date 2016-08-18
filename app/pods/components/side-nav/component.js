import Ember from 'ember'

const {
  Component,
  $
} = Ember

export default Component.extend({
  tagName: 'ul',
  classNames: ['side-nav'],
  id: 'slide-out',
  attributeBindings: ['id'],
  didInsertElement () {
    $('.button-collapse').sideNav({
      edge: 'right'
    })
  }
})
