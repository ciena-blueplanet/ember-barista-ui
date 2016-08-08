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
  didInsertElement () {
    let el = this.get('element')
    let tribute = new Tribute({
      values: this.get('values').map(e => {
        return {
          key: e.label,
          value: e.label
        }
      })
    })
    tribute.attach(el)
    el.addEventListener('tribute-replaced', (e) => {
      this.get('targetObject').send('tributeReplaced', e)
    })
  }
});
