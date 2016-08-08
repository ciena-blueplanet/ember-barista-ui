import Ember from 'ember';

export default Ember.Component.extend({
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
    this.get('element').removeAttribute('data-tribute')

    let tribute = new Tribute({
      values: this.get('content')
    })
    tribute.attach(this.get('element'))
  }.observes('content'),

  content: Ember.computed.map('elements.@each', function (e) {
    return {
      key: e.label,
      value: e.label
    }
  }),
  
  didInsertElement () {
    this.redraw()
    this.get('element').addEventListener('tribute-replaced', (e) => {
      this.get('targetObject').send('tributeReplaced', e)
    })
  }
});
