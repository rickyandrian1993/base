import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron'
import { logToFile } from '../main/logger'

// Custom APIs for renderer
const api = {
  closePort: (channel) => {
    const validChannels = ['close-port']
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel)
    }
  },
  onMessage: (channel, callback) => {
    const validChannels = ['message-from-main']
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => callback(...args))
    }
  },
  onWeighData: (channel, callback) => {
    const validChannels = ['weigh-data']
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => callback(...args))
    }
  },
  readWeigh: (channel, data) => {
    const validChannels = ['read-weigh']
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  sendMessage: (channel, data) => {
    const validChannels = ['message-from-react']
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  }
}

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
