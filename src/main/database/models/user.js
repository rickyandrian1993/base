import { STRING, TEXT } from 'sequelize'
import Base from './base'

class User extends Base {
  static initialize() {
    this.init(
      {
        ...this.getBaseFields(),
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
        }
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
