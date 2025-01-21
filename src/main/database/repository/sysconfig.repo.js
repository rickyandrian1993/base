import { logToFile } from '@main/logger'
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
    const transaction = await sequelize.transaction()
    try {
      await SystemConfig.update(
        { config: payload.config },
        { where: { id: payload.id }, transaction }
      )

      await transaction.commit()

      return this.findOne()
    } catch (error) {
      await transaction.rollback()
      logToFile(`Error Transaction rolled back due to an error: ${error}`)
      throw new Error(`Transaction rolled back due to an error:', ${error}`)
    }
  }
}

export default SysConfigRepository
