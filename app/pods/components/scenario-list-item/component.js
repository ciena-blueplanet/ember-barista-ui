import Ember from 'ember'

const {
  Component,
  $,
  run
} = Ember

export default Component.extend({
  tagName: 'li',
  classNames: ['scenario-list-item'],
  didInsertElement () {
    this._super(...arguments)
    run.schedule('sync', this, () => {
      this.$('.view_list').on('click', function (e) {
        $(e.target).parent().find('.collapsible-header').click()
      })
    })
  },
  actions: {
    add (value) {
      if (value) {
        let props = this.get('test.properties')
        if (props) {
          props.pushObject({
            value: ''
          })
        }
      }
    },
    focusOut (test, e) {
      test['content'] = e.replace(/"([^"]*)"close/g, '"$1"')
    },
    tributeReplaced (e) {
      let v = $(e.originalEvent.detail).data('value')
      let el = this.get('elements').find(function (e) {
        return e.label === v
      })
      this.get('scenario.elements')[v] = el
    },
    delete () {
      this.get('scenario.tests').removeObject(this.get('test'))
    },
    removeObject (els, el) {
      els.removeObject(el)
    }
  }
})
