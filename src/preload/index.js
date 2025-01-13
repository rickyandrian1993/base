import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge } from 'electron'
import { logToFile } from '../main/logger'
import { api } from './api'

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
    logToFile(`Error Context Bridge: ${error}`)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
