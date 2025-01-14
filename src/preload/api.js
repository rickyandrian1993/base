import { ipcRenderer } from 'electron'

// Custom APIs for renderer
export const api = {
  // GET
  getMillServer: (channel) => {
    const validChannels = ['get-mill-server']
    if (validChannels.includes(channel)) {
      return ipcRenderer.invoke(channel)
    }
  },
  getSystemConfig: async (channel) => {
    const validChannels = ['get-system-config']
    if (validChannels.includes(channel)) return await ipcRenderer.invoke(channel)
  },
  getWeigh: (channel, data) => {
    const validChannels = ['get-weigh']
    if (validChannels.includes(channel)) {
      return ipcRenderer.send(channel, data)
    }
  },

  onMessage: (channel, callback) => {
    const validChannels = ['message-from-main']
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => callback(...args))
    }
  },

  sendMessage: (channel, data) => {
    const validChannels = ['message-from-react']
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },

  // SET
  setWeigh: (channel, callback) => {
    const validChannels = ['set-weigh']
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => callback(...args))
    }
  },

  // ETC
  closePort: (channel) => {
    const validChannels = ['close-port']
    if (validChannels.includes(channel)) ipcRenderer.send(channel)
  },
  readFingerprint: async (channel) => {
    const validChannels = ['read-fingerprint']
    if (validChannels.includes(channel)) return await ipcRenderer.invoke(channel)
  },
  updateData: (channel, payload) => {
    const validChannels = ['update-data']
    if (validChannels.includes(channel)) return ipcRenderer.invoke(channel, payload)
  },
  validatePassword: async (channel, payload) => {
    const validChannels = ['validate-password']
    if (validChannels.includes(channel)) return await ipcRenderer.invoke(channel, payload)
  }
}
