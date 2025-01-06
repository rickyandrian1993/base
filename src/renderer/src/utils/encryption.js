import CryptoJS from 'crypto-js'
const key = import.meta.env.RENDERER_VITE_KEY

export const encrypCrypto = (dataString) => {
  try {
    let cipherText = CryptoJS.AES.encrypt(dataString, `${key}`).toString()

    return cipherText
  } catch (error) {
    console.log('Error EncryptCrypto:', error)
    return null
  }
}

export const decryptCrypto = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, `${key}`)

  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  } catch (error) {
    console.log('Error DecryptCrypto:', error)
    return bytes.toString(CryptoJS.enc.Utf8)
  }
}
