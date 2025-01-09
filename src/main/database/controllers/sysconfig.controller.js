import { logToFile } from '@main/logger'
import SysConfigDto from '../dto/sysconfig.dto'
import SysConfigMapper from '../mapper/sysconfig.mapper'
import SysConfigRepository from '../repository/sysconfig.repo'

const SysConfigController = {
  async updateSysConfig(payload) {
    try {
      const sysconfig = new SysConfigDto(payload)

      if (sysconfig.id) {
        const res = await SysConfigRepository.update(sysconfig)
        return SysConfigMapper.toDto(res)
      } else {
        const res = await SysConfigRepository.create(sysconfig)
        return {
          code: '200',
          message: 'Success created data',
          data: SysConfigMapper.toDto(res.dataValues)
        }
      }
    } catch (error) {
      logToFile(`Error System Config Controller: ${error}`)
    }
  }
}

export default SysConfigController
