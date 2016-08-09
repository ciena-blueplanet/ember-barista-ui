/* jshint node: true */
'use strict'

const electron = require('electron')
const path = require('path')

const {
  app,
  BrowserWindow
} = electron

const dirname = __dirname || path.resolve(path.dirname())
const emberAppLocation = `file://${dirname}/dist/index.html`

let mainWindow = null

app.on('window-all-closed', function onWindowAllClosed () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', function onReady () {
  mainWindow = new BrowserWindow({
    width: 900,
    minWidth: 900,
    height: 900,
    minHeight: 900,
    title: 'Ember Barista',
    titleBarStyle: process.platform === 'darwin' ? 'hidden-inset' : ''
  })

  delete mainWindow.module

  mainWindow.openDevTools();

  mainWindow.loadURL(emberAppLocation)

  // If a loading operation goes wrong, we'll send Electron back to
  // Ember App entry point
  mainWindow.webContents.on('did-fail-load', () => {
    mainWindow.loadURL(emberAppLocation)
  })

  mainWindow.webContents.on('crashed', () => {
    console.log('Your Ember app (or other code) in the main window has crashed.')
    console.log('This is a serious issue that needs to be handled and/or debugged.')
  })

  mainWindow.on('unresponsive', () => {
    console.log('Your Ember app (or other code) has made the window unresponsive.')
  })

  mainWindow.on('responsive', () => {
    console.log('The main window has become responsive again.')
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  process.on('uncaughtException', (err) => {
    console.log('An exception in the main thread was not handled.')
    console.log('This is a serious issue that needs to be handled and/or debugged.')
    console.log(`Exception: ${err}`)
  })
})
