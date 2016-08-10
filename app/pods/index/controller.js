import Ember from 'ember'

const {
  Controller
} = Ember
export default Controller.extend({
  init () {
    this.set('ipc', require('electron').ipcRenderer)
  },
  scenarios: [
    {
      name: 'My Scenario',
      elements: {},
      tests: [{
        content: ''
      }]
    }
  ],
  menu_buttons: [
    {
      action: 'addElement',
      color: 'cyan',
      icon: 'playlist_add',
      tooltip: 'Add Element'
    },
    {
      action: 'addScenario',
      color: 'teal',
      icon: 'note_add',
      tooltip: 'Add Scenario'
    }
  ],
  sidenav: [
    {
      type: 'divider'
    },
    {
      type: 'element',
      icon: 'settings',
      label: 'Settings'
    },
    {
      type: 'element',
      icon: 'info',
      label: 'About'
    }
  ],
  elements: Ember.computed.alias('model.elements'),
  actions: {
    addScenario () {
      this.get('scenarios').pushObject({
        name: 'New Scenario',
        elements: Ember.A()
      })
    },
    change (e) {
      Materialize.toast(`Selected ${e[0].label}`, 4000)
      if (!this.get('els').contains(e[0]))
        this.get('els').pushObject(e[0])
    },
    publish () {
      this.get('ipc').send(
        'publish',
        this.get('scenarios').map(e => Object.assign({}, e))
      )
    },
    add () {
      this.get('scenarios').pushObject({
        name: 'New Scenario',
        tests: [{
          content: ''
        }],
        elements: {}
      })
    },
    deleteScenario (e) {
      this.get('scenarios').removeObject(e)
    }
  }
})
