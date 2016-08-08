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
  hello: function () {
    this.update()
    console.log('has changed')
  }.observes('elements.@each'),
  vals: Ember.computed.map('elements.@each', function (e) {
    return {
      key: e.label,
      value: e.label
    }
  }),
  didInsertElement () {
    this.update()
    this.get('element').addEventListener('tribute-replaced', (e) => {
      this.get('targetObject').send('tributeReplaced', e)
    })
  },
  update () {
    let tribute = new Tribute({
      values: this.get('vals')
    })
    tribute.attach(this.get('element'))
  }
});
