import Ember from 'ember'
import ContentEditable from 'ember-content-editable/components/content-editable'
const {
  run,
  computed
} = Ember

export default ContentEditable.extend({
  classNames: [
    'tribute-input'
  ],
  tribute: null,
  redraw: function () {
    run.schedule('sync', this, function () {
      let tribute = this.get('tribute')
      if (tribute) {
        tribute.collection[0].values = this.get('content')
      }
    })
  }.observes('content'),
  content: computed.map('elements', function (e) {
    return {
      key: e.label,
      value: e.label
    }
  }),
  focusOut () {
    this.get('targetObject').send('focusOut', this.get('test'), this.$().text())
  },
  didInsertElement () {
    this._super(...arguments)
    run.schedule('sync', this, () => {
      this.$().on('focus', function (e) {
        e.stopPropagation()
      })
      let tribute = new window.Tribute({
        values: this.get('content'),
        selectTemplate (item) {
          let v = item.original.value
          return `<div class='chip waves-effect waves-light' data-value="${v}" contenteditable='false'>` +
            `${v}` +
            '<i class="close material-icons">close</i>' +
            '</div>'
        }
      })
      tribute.attach(this.get('element'))
      this.set('tribute', tribute)
      this.redraw()
      this.$().on('tribute-replaced', (e) => {
        let target = this.get('targetObject')
        if (target) {
          target.send('tributeReplaced', e)
        }
      })
    })
  }
})
