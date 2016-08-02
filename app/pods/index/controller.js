import Ember from 'ember'

const {
  Controller
} = Ember

export default Controller.extend({
  buttons: [
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
  actions: {
    addElement () {
       Materialize.toast('Adding element', 4000, 'bottom-left')
    },
    addScenario () {
      Materialize.toast('Adding scenario', 4000, 'bottom-left')

    },
    openModal (modal) {
      $(`#${modal}`).openModal()
    }
  }
})
