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
      name: '',
      elements: {},
      tests: [{
        content: '',
        properties: Ember.A([{
          value: ''
        }])
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
        JSON.parse(JSON.stringify(this.get('scenarios')))
      )
    },
    add () {
      this.get('scenarios').pushObject({
        name: '',
        tests: [{
          content: '',
          properties: Ember.A([{
            value: ''
          }])
        }],
        elements: {}
      })
    },
    deleteScenario (e) {
      this.get('scenarios').removeObject(e)
    }
  }
})
