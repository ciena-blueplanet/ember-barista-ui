import Ember from 'ember'

const {
  Component,
  run,
  $
} = Ember

export default Component.extend({
  tagName: 'ul',
  classNames: ['side-nav'],
  id: 'slide-out',
  attributeBindings: ['id'],
  didInsertElement () {
    this._super(...arguments)
    run.schedule('sync', () => {
      let collapse = $('.button-collapse')
      collapse.sideNav({
        edge: 'right'
      })
    })
  }
})
