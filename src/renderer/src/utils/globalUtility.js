import { decryptCrypto, encrypCrypto } from './encryption'

export const getStorage = (key) => {
  try {
    const data = typeof window !== 'undefined' ? localStorage.getItem(key) : null

    if (!key) return
    return data && decryptCrypto(data)
  } catch (error) {
    console.log('Error getting storage:', error)
  }
}

export const setStorage = (key, data) => {
  if (!key) return

  if (typeof data !== 'string') data = JSON.stringify(data)

  window.localStorage.setItem(key, encrypCrypto(data))
}

export const removeStorage = (key) => window.localStorage.removeItem(key)

export const clearStorage = () => window.localStorage.clear()
