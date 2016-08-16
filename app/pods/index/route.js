import Ember from 'ember'

const {
  Route,
  RSVP
} = Ember

const {
  ipcRenderer
} = require('electron')

export default Route.extend({
  model () {
    return RSVP.hash({
      elements: new RSVP.Promise((resolve, reject) => {
        ipcRenderer.on('types', (event, types) => {
          resolve(Object.keys(types).map(e => {
            return Ember.Object.create({
              label: e,
              properties: Ember.A([{
                value: ''
              }]),
              type: e
            })
          }))
        })
        ipcRenderer.send('get-types')
      })
    })
  }
})
