import { ipcMain } from 'electron'
import { mainWindow } from '..'
import { listenerSerialPort } from './handlers/serialPort'
import { listenerServices } from './handlers/services'

export function ipcMainHandler() {
  ipcMain.on('read-weigh', listenerSerialPort.readWeight)
  ipcMain.on('ping', listenerServices.getDataUser)
  ipcMain.on('message-from-react', (event, data) => {
    console.log('Receive from React: ', data)

    mainWindow.webContents.send('message-from-main', 'Hello from Electron main process')
  })
  ipcMain.on('close-port', listenerSerialPort.closePort)
}
