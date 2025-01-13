import { endpoints } from '@main/constant/endpoints'
import axios from 'axios'

const baseAPIJava = 'http://localhost:3337'

const FingerprintController = {
  async readFingerprint() {
    return await axios
      .post(`${baseAPIJava}/${endpoints.authFinger}`)
      .then((res) => {
        return res
      })
      .catch((error) => console.log('error', error))
    // let temp = null
    // setTimeout(() => {
    //   temp = {
    //     code: '200',
    //     message: 'Success read fingerprint',
    //     data: 'kasdkjqoiweqkjlasdanmxcioisouq'
    //   }
    // }, 5000)
    // return temp
  }
}

export default FingerprintController
