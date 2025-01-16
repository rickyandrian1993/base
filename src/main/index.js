import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { app, BrowserWindow, dialog, shell } from 'electron'
import { autoUpdater } from 'electron-updater'
import { join } from 'path'
import icon from '../../wb.ico'
import { initConnection } from './database/connection'
import { ipcMainHandler } from './ipc'

export let mainWindow = null

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      contextIsolation: true,
      sandbox: false
    }
  })
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.maximized()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // Auto update electron application
  autoUpdater.on('update-available', (_event, releaseNotes, releaseName) => {
    const dialogOpts = {
      type: 'info',
      buttons: ['Ok'],
      title: `Update Available`,
      message: process.platform === 'win32' ? releaseNotes : releaseName,
      detail: `A new version download started.`
    }

    dialog.showMessageBox(dialogOpts)
  })

  autoUpdater.on('download-progress', (progressObj) =>
    mainWindow.webContents.send('download-progress', progressObj.percent)
  )

  autoUpdater.on('update-downloaded', () => autoUpdater.quitAndInstall())

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  await initConnection()
  // Set app user model id for windows
  electronApp.setAppUserModelId(`com.${import.meta.env?.VITE_KEY?.toLowerCase()}`)

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMainHandler()

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
