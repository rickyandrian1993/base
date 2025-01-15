import { WBMessage } from '@renderer/components'
import { channelElectron } from './endpoints'

export const electronRequest = async (preload, loading, payload, callback) => {
  try {
    loading(true)
    window.api[preload](channelElectron[preload], payload).then((response) => {
      loading(false)
      if (response.code === 500 || response.code === '500')
        return WBMessage({ type: 'error', data: response.message })

      WBMessage({ type: 'success', data: response?.message || 'Request success' })
      callback(response)
    })
  } catch (error) {
    loading(false)
    WBMessage({ type: 'error', data: 'Failed electron request' })
    console.log(`Error electron request: ${error}`)
  }
}
