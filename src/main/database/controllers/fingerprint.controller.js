import { endpoints } from '@main/constant/endpoints'
import { logToFile } from '@main/logger'
import axios from 'axios'

const baseAPIJava = 'http://localhost:3337'

const FingerprintController = {
  async scanFingerprint() {
    return await axios
      .post(`${baseAPIJava}/${endpoints.authFinger}`)
      .then((res) => {
        console.log('res', res)
        return res
      })
      .catch((error) => {
        logToFile(`Error scan fingerprint: ${JSON.stringify(error)}`)
        return {
          code: '500',
          message: 'Failed to get fingerprint data'
        }
      })
  }
}

export default FingerprintController
