import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../connection'

class User extends Model {}

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
    }
  },
  {
    sequelize,
    modelName: 'User'
  }
)

export default User
