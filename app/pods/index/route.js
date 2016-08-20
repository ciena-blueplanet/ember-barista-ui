import Ember from 'ember'

const {
  Route,
  RSVP,
  A
} = Ember



export default Route.extend({
  model () {
    const {
      ipcRenderer
    } = require('electron')

    return new RSVP.Promise((resolve, reject) => {
      ipcRenderer.on('types', (event, types) => {
        resolve(types)
      })
      ipcRenderer.send('get-types')
    })
  },
  setupController (controller, model) {
    this._super(controller, model)
    let elements = Object.keys(model).map(e => {
      return Ember.Object.create({
        label: e,
        properties: A([{
          value: ''
        }]),
        type: e
      })
    })
    controller.set('elements', elements)
    controller.set('types', Object.keys(model))
  }
})
