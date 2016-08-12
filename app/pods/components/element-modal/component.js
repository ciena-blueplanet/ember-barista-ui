import Ember from 'ember';

export default Ember.Component.extend({
  elementService: Ember.inject.service(),
  id: 'editElement',
  attributeBindings: ['id'],
  classNames: [
    'modal',
    'bottom-sheet',
    'modal-fixed-footer'
  ],
  init () {
    this._super(...arguments)
    this.get('elementService').addObserver('element', () => {
      this.set('el', this.get('elementService.element'))
    })
  },
  actions: {
    add (value) {
      if (value)
        this.get('el.properties').pushObject({
          value: ''
        })
    }
  }
});
