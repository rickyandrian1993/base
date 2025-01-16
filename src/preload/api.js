import { ipcRenderer } from 'electron'

// Custom APIs for renderer
export const api = {
  onMessage: (channel, callback) => {
    const validChannels = ['message-from-main']
    if (validChannels.includes(channel)) ipcRenderer.on(channel, (_, ...args) => callback(...args))
  },
  sendMessage: (channel, data) => {
    const validChannels = ['message-from-react']
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },

  closePort: (channel) => {
    const validChannels = ['close-port']
    if (validChannels.includes(channel)) ipcRenderer.send(channel)
  },
  getMillServer: async (channel) => {
    const validChannels = ['get-mill-server']
    if (validChannels.includes(channel)) return await ipcRenderer.invoke(channel)
  },
  getSystemConfig: async (channel) => {
    const validChannels = ['get-system-config']
    if (validChannels.includes(channel)) return await ipcRenderer.invoke(channel)
  },
  getWeight: (channel) => {
    const validChannels = ['get-weight']
    if (validChannels.includes(channel)) return ipcRenderer.send(channel)
  },
  login: async (channel, payload) => {
    const validChannels = ['login']
    if (validChannels.includes(channel)) return await ipcRenderer.invoke(channel, payload)
  },
  onDownloadProgress: (channel, callback) => {
    const validChannels = ['on-download-progress']
    if (validChannels.includes(channel))
      return ipcRenderer.on(channel, (_, ...args) => callback(...args))
  },
  scanFingerprint: async (channel) => {
    const validChannels = ['scan-fingerprint']
    if (validChannels.includes(channel)) return await ipcRenderer.invoke(channel)
  },
  setWeight: (channel, callback) => {
    const validChannels = ['set-weight']
    if (validChannels.includes(channel)) ipcRenderer.on(channel, (_, ...args) => callback(...args))
  },
  updateSystemConfig: async (channel, payload) => {
    const validChannels = ['update-system-config']
    if (validChannels.includes(channel)) return await ipcRenderer.invoke(channel, payload)
  },
  validatePassword: async (channel, payload) => {
    const validChannels = ['validate-password']
    if (validChannels.includes(channel)) return await ipcRenderer.invoke(channel, payload)
  }
}
