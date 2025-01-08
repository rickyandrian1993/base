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
        ...this.getBaseFields(),
        userId: {
          type: UUIDV4,
          allowNull: false
        },

        name: {
          type: STRING,
          allowNull: false
        }
      },
      {
        sequelize: this.sequelize,
        modelName: 'service_center'
      }
    )
  }
}

ServiceCenter.initialize()
// ServiceCenter.associate(User())

export default ServiceCenter
