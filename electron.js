/* jshint node: true */
'use strict'

const electron = require('electron')
const path = require('path')
const {
  ipcMain
} = electron
const {
  app,
  BrowserWindow
} = electron

const dirname = __dirname || path.resolve(path.dirname())
const location = `file://${dirname}/dist/index.html`

let mainWindow = null

app.on('window-all-closed', function onWindowAllClosed () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', function onReady () {
  mainWindow = new BrowserWindow({
    width: 1000,
    minWidth: 900,
    height: 800,
    minHeight: 800,
    title: 'Ember Barista',
    titleBarStyle: process.platform === 'darwin' ? 'hidden-inset' : ''
  })

  delete mainWindow.module

  mainWindow.openDevTools();

  mainWindow.loadURL(location)

  // If a loading operation goes wrong, we'll send Electron back to
  // Ember App entry point
  mainWindow.webContents.on('did-fail-load', () => {
    mainWindow.loadURL(location)
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  process.on('uncaughtException', (err) => {
    console.log(`Exception: ${err}`)
  })
  ipcMain.on('publish', function () {
    console.log(...arguments)
  })
})
