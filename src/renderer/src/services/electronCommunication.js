import { WBMessage } from '@renderer/components'
import { channelElectron } from './endpoints'

export const electronRequest = (preload, loading, payload, callback) => {
  try {
    loading(true)
    window.api[preload](channelElectron[preload], payload).then((response) => {
      if (response.code === 500) return WBMessage({ type: 'error', data: response.message })

      WBMessage({ type: 'success', data: response?.message || 'Request success' })
      callback(response)
      loading(false)
    })
  } catch (error) {
    WBMessage({ type: 'error', data: 'Failed electron request' })
    console.log(`Error electron request: ${error}`)
    loading(false)
  }
}
