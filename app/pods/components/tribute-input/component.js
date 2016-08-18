import Ember from 'ember';
import ContentEditable from 'ember-content-editable/components/content-editable';
const {
  Component,
  run,
  $
} = Ember

export default ContentEditable.extend({
  classNames: [
    'tribute-input'
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
  focusOut () {
    this.get('targetObject').send('focusOut', this.get('test'), this.$().text())
  },
  didInsertElement () {
    this.$().on('focus', function (e) {
      e.stopPropagation();
    })
    let tribute = new Tribute({
      values: this.get('content'),
      selectTemplate (item) {
        let v = item.original.value
        return `<div class='chip waves-effect waves-light' data-value="${v}" contenteditable='false'>` +
          `${v}` +
          `<i class="close material-icons">close</i>` +
          `</div>`
      }
    })
    tribute.attach(this.get('element'))
    this.set('tribute', tribute)
    this.redraw()
    this.$().on('tribute-replaced', (e) => {
      this.get('targetObject').send('tributeReplaced', e)
    })
  }
});
