import { errorResponse, successResponse } from '@main/constant/responseMessage'
import { logToFile } from '@main/logger'

const pass = import.meta.env.VITE_PASS

const ValidationController = {
  async validatePassword(payload) {
    try {
      // if (!pass)
      //   return {
      //     ...errorResponse,
      //     message: 'Failed to get password default'
      //   }

      // if (pass !== payload.password)
      //   return {
      //     ...errorResponse,
      //     message: 'Incorrect admin password'
      //   }

      return successResponse
    } catch (error) {
      logToFile(`Error validate password: ${JSON.stringify(error)}`)
      return errorResponse
    }
  }
}

export default ValidationController
