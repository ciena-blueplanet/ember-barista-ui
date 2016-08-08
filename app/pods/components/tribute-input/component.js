import Ember from 'ember';
const {
  Component,
  run
} = Ember

export default Component.extend({
  tagName: 'input',
  type: 'text',
  classNames: [
    'tribute-input'
  ],
  attributeBindings: [
    'type',
    'placeholder'
  ],
  tribute: null,
  redraw: function () {
    run.schedule('sync', this, function () {
      this.get('tribute').collection[0].values = this.get('content')
    })
  }.observes('content'),
  content: Ember.computed('elements.[]', function () {
    return this.get('elements').map(e => {
      return {
        key: e.label,
        value: e.label
      }
    })

  }),
  didInsertElement () {
    let tribute = new Tribute({
      values: this.get('content')
    })
    tribute.attach(this.get('element'))
    this.set('tribute', tribute)
    this.redraw()
    this.get('element').addEventListener('tribute-replaced', (e) => {
      this.get('targetObject').send('tributeReplaced', e)
    })
  }
});
