import { channelElectron } from '@renderer/utils/endpoints'

export const getRequest = (preload, loading, payload, callback) => {
  try {
    loading(true)

    window.api[preload](channelElectron[preload], payload).then((response) => {
      callback(response)
      loading(false)
    })
  } catch (error) {
    loading(false)
    console.log('error', error)
    // RATToast({ type: 'error', message: 'something went wrong' })
  }
}
