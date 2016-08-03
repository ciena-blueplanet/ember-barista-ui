import Ember from 'ember'

const {
  Route,
  RSVP
} = Ember

export default Route.extend({
  model () {
    return RSVP.hash({
      elements: new RSVP.Promise((resolve, reject) => {
        resolve(['Button', 'Text Field', 'Link', "Etc"].map(e => {
          return {
            label: e,
            value: {
              label: e,
              properties: Ember.A([Ember.Object.create({ name: '', isFocused: true })]),
              icon: {
                'Text Field': 'input',
                'Button': 'explicit',
                'Link': 'web',
                "Etc": 'snooze'
              }[e]
            }
          }
        }))
      })
    })
  }
})
