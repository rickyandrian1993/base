import models from '../models'

const { SystemConfig } = models

const SysConfigRepository = {
  async create(payload) {
    return await SystemConfig.create(payload)
  },

  async update(payload) {
    return await SystemConfig.update(payload, { where: { id: payload.id } })
  }
}
export default SysConfigRepository
