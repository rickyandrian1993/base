import { ipcMain } from 'electron'
import { serialPortListener } from './handlers/serialPort'
import { listenerServices } from './handlers/services'

export function ipcMainHandler() {
  ipcMain.on('ping', listenerServices.getDataUser)

  ipcMain.on('close-port', serialPortListener.closePort)
  ipcMain.handle('get-mill-server', listenerServices.getMillServer)
  ipcMain.on('get-weight', listenerServices.getWeight)
  ipcMain.handle('get-system-config', listenerServices.getSystemConfig)
  ipcMain.handle('login', listenerServices.login)
  ipcMain.on('print-document', listenerServices.printDocument)
  ipcMain.handle('scan-fingerprint', listenerServices.scanFingerprint)
  ipcMain.handle('update-system-config', listenerServices.updateSystemConfig)
  ipcMain.handle('validate-password', listenerServices.validatePassword)
}
