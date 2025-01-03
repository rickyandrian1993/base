import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../connection'

class SerialPort extends Model {}

SerialPort.init(
  {
    uuid: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    baudrate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    databits: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stopbits: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    com: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'SerialPort'
  }
)

export default SerialPort
