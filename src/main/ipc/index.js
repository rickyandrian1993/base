import { ipcMain } from 'electron'
import { mainWindow } from '..'
import { serialPortListener } from './handlers/serialPort'
import { listenerServices } from './handlers/services'

export function ipcMainHandler() {
  ipcMain.on('ping', listenerServices.getDataUser)
  ipcMain.on('message-from-react', (event, data) => {
    console.log('Receive from React: ', data)
    mainWindow.webContents.send('message-from-main', 'Hello from Electron main process')
  })

  ipcMain.on('close-port', serialPortListener.closePort)
  ipcMain.on('get-weight', listenerServices.getWeight)
  ipcMain.handle('get-mill-server', listenerServices.getMillServer)
  ipcMain.handle('get-system-config', listenerServices.getSystemConfig)
  ipcMain.handle('login', listenerServices.login)
  ipcMain.handle('scan-fingerprint', listenerServices.scanFingerprint)
  ipcMain.handle('update-system-config', listenerServices.updateSystemConfig)
  ipcMain.handle('validate-password', listenerServices.validatePassword)
}
