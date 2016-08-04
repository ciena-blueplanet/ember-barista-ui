import Ember from 'ember'

const {
  Controller
} = Ember

export default Controller.extend({
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
    addElement () {
       Materialize.toast('Adding element', 4000)
    },
    addScenario () {
      Materialize.toast('Adding scenario', 4000)

    },
    openModal (modal) {
      $(`#${modal}`).openModal()
      $(`#${modal} select`).material_select();
    },
    change (e) {
      Materialize.toast(`Selected ${e[0].label}`, 4000)
      if (!this.get('els').contains(e[0]))
        this.get('els').pushObject(e[0])
    }
  }
})
