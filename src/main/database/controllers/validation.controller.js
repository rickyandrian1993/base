import { logToFile } from '@main/logger'

const pass = import.meta.env.VITE_PASS

const ValidationController = {
  async validatePassword(payload) {
    try {
      if (!pass)
        return {
          code: 500,
          message: 'Failed to get password default'
        }

      if (pass !== payload.password)
        return {
          code: 500,
          message: 'Incorrect admin password'
        }

      return {
        code: 200,
        message: ''
      }
    } catch (error) {
      logToFile(`Error validate password: ${JSON.stringify(error)}`)
      return {
        code: 500,
        message: 'Internal Server Error'
      }
    }
  }
}

export default ValidationController
