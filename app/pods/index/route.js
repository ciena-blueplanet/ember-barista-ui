import Ember from 'ember'

const {
  Route,
  RSVP
} = Ember

export default Route.extend({
  model () {
    return RSVP.hash({
      elements: new RSVP.Promise((resolve, reject) => {
        resolve(['Button', 'Text Field', 'Link', "Page"].map(e => {
          return Ember.Object.create({
            label: e,
            properties: Ember.A([{
              value: ''
            }]),
            type: e
          })
        }))
      })
    })
  }
})
