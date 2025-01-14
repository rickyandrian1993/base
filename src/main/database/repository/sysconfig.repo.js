import { QueryTypes } from 'sequelize'
import { sequelize } from '../connection'
import models from '../models'

const { SystemConfig } = models

const SysConfigRepository = {
  async findOne() {
    return await sequelize.query('SELECT * FROM system_configs LIMIT 1;', {
      type: QueryTypes.SELECT
    })
  },
  async findAll() {
    return await sequelize.query('SELECT * FROM system_configs', {
      type: QueryTypes.SELECT
    })
  },

  async create(payload) {
    return await SystemConfig.create(payload)
  },

  async update(payload) {
    return await SystemConfig.update(payload, { where: { id: payload.id } })
  }
}
export default SysConfigRepository
