import { JSON, UUIDV4 } from 'sequelize'
import Base from './base'

class SystemConfig extends Base {
  static initialize() {
    this.init(
      {
        id: {
          type: UUIDV4,
          primaryKey: true,
          defaultValue: UUIDV4,
          allowNull: false
        },
        config: {
          type: JSON,
          allowNull: false
        }
      },
      {
        sequelize: this.sequelize,
        underscored: true,
        modelName: 'system_config'
      }
    )
  }
}

SystemConfig.initialize()

export default SystemConfig
