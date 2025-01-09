import { STRING, UUIDV4 } from 'sequelize'
import Base from './base'

class ServiceCenter extends Base {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'users_id',
      as: 'user'
    })
  }

  static initialize() {
    this.init(
      {
        uuid: {
          type: UUIDV4,
          primaryKey: true,
          defaultValue: UUIDV4,
          allowNull: false
        },
        userId: {
          type: UUIDV4,
          allowNull: false
        },
        name: {
          type: STRING,
          allowNull: false
        },
        ...this.getBaseFields()
      },
      {
        sequelize: this.sequelize,
        modelName: 'service_center'
      }
    )
  }
}

ServiceCenter.initialize()

export default ServiceCenter
