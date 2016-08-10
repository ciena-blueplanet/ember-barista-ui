/* jshint node: true */
'use strict'

const electron = require('electron')
const path = require('path')
const barista = require('./barista')
const fs = require('fs')
const {
  ipcMain
} = electron
const {
  app,
  dialog,
  BrowserWindow
} = electron

const dirname = __dirname || path.resolve(path.dirname())
const location = `file://${dirname}/dist/index.html`

let mainWindow = null

app.on('window-all-closed', function () {
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

  mainWindow.loadURL(location)

  mainWindow.webContents.on('did-fail-load', function () {
    mainWindow.loadURL(location)
  })

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  process.on('uncaughtException', function (err) {
    console.log(`Exception: ${err}`)
  })
  ipcMain.on('publish', function (event, scenarios) {
    barista.generate(scenarios).then(function (content) {

      dialog.showSaveDialog(function (file) {
        if (!file) return
        fs.writeFileSync(file, content);
      })
    })
  })
})
