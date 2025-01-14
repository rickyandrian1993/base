import { axiosPrivate } from '@main/constant/axios'
import { endpoints } from '@main/constant/endpoints'
import { logToFile } from '@main/logger'

const MillController = {
  async getMillServer() {
    try {
      return await axiosPrivate
        .post(endpoints.get_token, {})
        .then(async ({ data }) => {
          if (data.isError === true || data.isError === 'Y') {
            return {
              code: 500,
              message: 'Failed to get token from server'
            }
          } else {
            const payload = {
              locale: 'en',
              remote: '12.213.1.55',
              agent: 'mozzila',
              user: {},
              data: { token_request: data?.data?.token_request }
            }
            return await axiosPrivate
              .post(endpoints.get_mill_list, payload)
              .then(({ data }) => {
                return {
                  code: 200,
                  message: 'Success get mill from server',
                  data: {
                    server_response: data,
                    payload
                  }
                }
              })
              .catch((error) => {
                logToFile(`Error getAllMillNoSt: ${JSON.stringify(error)}`)
                return {
                  code: 500,
                  message: 'Failed to get mill server'
                }
              })
          }
        })
        .catch((error) => {
          logToFile(`Error auth/token-request: ${error}`)
          return {
            code: 500,
            message: 'Failed to get mill server'
          }
        })
    } catch (error) {
      logToFile(`Error getMillServer: ${error}`)
      return {
        code: 500,
        message: 'Internal Server Error'
      }
    }
  }
}

export default MillController
