import { ipcMain } from 'electron'
import { mainWindow } from '..'
import { serialPortListener } from './handlers/serialPort'
import { listenerServices } from './handlers/services'
import { sysconfigListener } from './handlers/sysconfig.listener'

export function ipcMainHandler() {
  ipcMain.on('ping', listenerServices.getDataUser)
  ipcMain.on('message-from-react', (event, data) => {
    console.log('Receive from React: ', data)
    mainWindow.webContents.send('message-from-main', 'Hello from Electron main process')
  })
  ipcMain.on('close-port', serialPortListener.closePort)
  ipcMain.on('get-weigh', serialPortListener.getWeigh)
  ipcMain.handle('update-data', sysconfigListener.updateData)
}
