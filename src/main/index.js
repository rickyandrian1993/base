import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { app, BrowserWindow, ipcMain, shell } from 'electron'
import { join } from 'path'
import { ReadlineParser, SerialPort } from 'serialport'
import icon from '../../wb.ico'
import { initConnection } from './database/connection'
import UserController from './database/controllers/userController'

let mainWindow = null
let port = null

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
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

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

  // IPC test
  ipcMain.on(
    'ping',
    async () => await UserController.createUser({ username: 'asd', email: 'asd@mail.com' })
  )

  ipcMain.on('message-from-react', (event, data) => {
    console.log('Receive from React: ', data)

    mainWindow.webContents.send('message-from-main', 'Hello from Electron main process')
  })

  // Read serialport data
  ipcMain.on('read-weigh', async (event, options) => {
    try {
      if (!port) {
        port = new SerialPort({
          baudRate: Number(options.baudRate),
          dataBits: options.dataBits,
          stopBits: options.stopBits,
          parity: options.parity,
          path: options.com
        })

        port.on('open', () => console.log('Port Opened: ', options.com))
      }

      const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

      parser.on('data', (data) => {
        console.log('serial data: ', data)
        mainWindow.webContents.send('weigh-data', data)
      })
    } catch (error) {
      console.log('Error: ', error)
    }
  })

  ipcMain.on('close-port', async (event) => {
    try {
      await port.close(() => {
        console.log('Port Close')
        port = null
        // port.on('error', (err) => ) // return error to client
      })
    } catch (error) {
      console.log('Error close port: ', error)
    }
  })

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
