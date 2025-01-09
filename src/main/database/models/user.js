import { STRING, TEXT, UUIDV4 } from 'sequelize'
import Base from './base'

class User extends Base {
  static associate(models) {
    this.hasMany(models.ServiceCenter, {
      foreignKey: 'users_id',
      as: 'service_center'
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
        username: {
          type: STRING,
          allowNull: false
        },
        email: {
          type: STRING,
          allowNull: false,
          unique: true
        },
        address: {
          type: TEXT
        },
        ...this.getBaseFields()
      },
      {
        sequelize: this.sequelize,
        modelName: 'user'
      }
    )
  }
}

User.initialize()

export default User
