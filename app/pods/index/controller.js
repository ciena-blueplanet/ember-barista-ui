import Ember from 'ember'

const {
  Controller,
  run
} = Ember
const {
  remote,
  ipcRenderer
} = require('electron')

const {
  Menu,
  MenuItem
} = remote

export default Controller.extend({
  init () {
    this._super(...arguments)
    const menu = new Menu()
    menu.append(new MenuItem({label: 'MenuItem1', click() { console.log('item 1 clicked') }}))
    menu.append(new MenuItem({type: 'separator'}))
    menu.append(new MenuItem({label: 'MenuItem2', type: 'checkbox', checked: true}))
    run.schedule('afterRender', this, function () {
      window.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        menu.popup(remote.getCurrentWindow())
      }, false)
    });
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
      ipcRenderer.send(
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
