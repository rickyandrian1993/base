import { DataTypes } from 'sequelize'
import Base from './base'

class SerialPort extends Base {
  static initialize() {
    this.init(
      {
        ...this.getBaseFields(),
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
        sequelize: this.sequelize,
        modelName: 'serial_port'
      }
    )
  }
}

SerialPort.initialize()

export default SerialPort
