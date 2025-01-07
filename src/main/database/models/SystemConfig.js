import { JSON } from 'sequelize'
import Base from './base'

class SystemConfig extends Base {
  static initialize() {
    this.init(
      {
        ...this.getBaseFields(),
        sys_config: {
          type: JSON,
          allowNull: false
        }
      },
      {
        sequelize: this.sequelize,
        modelName: 'system_config'
      }
    )
  }
}

SystemConfig.initialize()

export default SystemConfig
