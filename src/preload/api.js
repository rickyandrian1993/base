import { ipcRenderer } from 'electron'

// Custom APIs for renderer
export const api = {
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
  setWeigh: (channel, callback) => {
    const validChannels = ['set-weigh']
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => callback(...args))
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
  scanFingerprint: async (channel) => {
    const validChannels = ['scan-fingerprint']
    if (validChannels.includes(channel)) return await ipcRenderer.invoke(channel)
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
