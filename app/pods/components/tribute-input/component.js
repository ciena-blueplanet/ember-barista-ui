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
    this.get('targetObject').send('focusOut', this.get('test'), $(this.get('element')).text())
  },
  didInsertElement () {
    $(this.get('element')).on('focus', function (e) {
      e.stopPropagation();
    })
    let tribute = new Tribute({
      values: this.get('content'),
      selectTemplate (item) {
        let v = item.original.value
        return `<div class='chip' data-value="${v}" contenteditable='false'>` +
          `"${v}"` +
          `<i onclick='delete this.parentElement' class="material-icons">close</i>` +
          `</div>`
      }
    })
    tribute.attach(this.get('element'))
    this.set('tribute', tribute)
    this.redraw()
    this.get('element').addEventListener('tribute-replaced', (e) => {
      this.get('targetObject').send('tributeReplaced', e)
    })
  }
});
