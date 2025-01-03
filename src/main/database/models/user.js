import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../connection'

class User extends Model {
  static async softDelete(id) {
    return this.update({ softDeleted: true }, { where: { id } })
  }

  static async restore(id) {
    return this.update({ softDeleted: false }, { where: { id } })
  }
}

User.init(
  {
    uuid: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.TEXT
    }
  },
  {
    sequelize,
    paranoid: true,
    modelName: 'User'
  }
)

export default User
