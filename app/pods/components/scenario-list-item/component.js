import Ember from 'ember';

const {
  Component
} = Ember

export default Component.extend({
  tagName: 'li',
  classNames: ['scenario-list-item'],
  didInsertElement () {
    this.$('.view_list').on('click', function (e) {
      $(e.target).parent().find('.collapsible-header').click()
    })
  },
  actions: {
    add () {
      this.get('test.properties').pushObject({
        value: ''
      })
    },
    change () {},
    focusOut (test, e) {
      test['content'] = e.replace(/"([^"]*)"close/g, '"$1"')
    },
    tributeReplaced (e) {
      let v = $(e.detail).data('value')
      let el = this.get('elements').find(function (e) {
        return e.label === v;
      })
      this.get('scenario.elements')[v] = el
    },
    delete (el) {
      this.get('scenario.tests').removeObject(this.get('test'))
    }
  }
});
