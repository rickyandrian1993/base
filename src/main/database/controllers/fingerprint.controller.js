import { endpoints } from '@main/constant/endpoints'
import { errorResponse, successResponse } from '@main/constant/responseMessage'
import { logToFile } from '@main/logger'
import axios from 'axios'

const baseAPIJava = 'http://localhost:3337'

const FingerprintController = {
  async scanFingerprint() {
    return await axios
      .post(`${baseAPIJava}/${endpoints.authFinger}`, {})
      .then(({ data }) => {
        if (data?.status_code !== 200)
          return {
            ...errorResponse,
            message: 'Failed to scan fingerprint'
          }
        return {
          ...successResponse,
          data: data?.data
        }
      })
      .catch((error) => {
        logToFile(`Error scan fingerprint: ${JSON.stringify(error)}`)
        return {
          ...errorResponse,
          message: 'Failed to scan fingerprint'
        }
      })
  }
}

export default FingerprintController
