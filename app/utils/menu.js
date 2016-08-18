import Ember from 'ember'
const {
  run
} = Ember
const {
  remote
} = require('electron')

const {
  Menu,
  MenuItem
} = remote

export default Ember.Object.create({
  init () {
    const menu = new Menu()
    menu.append(new MenuItem({label: 'MenuItem1', click() { console.log('item 1 clicked'); return false}}))
    menu.append(new MenuItem({type: 'separator'}))
    menu.append(new MenuItem({label: 'MenuItem2', type: 'checkbox', checked: true}))
    run.schedule('afterRender', this, function () {
      window.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        menu.popup(remote.getCurrentWindow())
      }, false)
    });
  }
})
