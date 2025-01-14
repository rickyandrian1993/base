import { errorResponse, successResponse } from '@main/constant/responseMessage'
import { logToFile } from '@main/logger'
import SysConfigDto from '../dto/sysconfig.dto'
import SysConfigMapper from '../mapper/sysconfig.mapper'
import SysConfigRepository from '../repository/sysconfig.repo'

const SysConfigController = {
  async getSystemConfig() {
    try {
      const res = await SysConfigRepository.findOne()

      if (!res.length)
        return {
          ...successResponse,
          message: 'No data available'
        }

      const result = SysConfigMapper.toDto(res[0])

      return {
        ...successResponse,
        data: result
      }
    } catch (error) {
      logToFile(`Error getSystemConfig Controller: ${error}`)
      return errorResponse
    }
  },

  async updateSysConfig(payload) {
    try {
      const sysconfig = new SysConfigDto(payload)
      if (sysconfig.id) {
        const res = await SysConfigRepository.update(sysconfig)

        return {
          ...successResponse,
          message: 'Success update system config',
          data: SysConfigMapper.toDto(res[0])
        }
      } else {
        const res = await SysConfigRepository.create(sysconfig)

        return {
          code: 200,
          message: 'Success create system config',
          data: SysConfigMapper.toDto(res.dataValues)
        }
      }
    } catch (error) {
      logToFile(`Error updateSysConfig Controller: ${error}`)
      return errorResponse
    }
  }
}

export default SysConfigController
