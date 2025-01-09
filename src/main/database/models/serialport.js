import { DataTypes, UUIDV4 } from 'sequelize'
import Base from './base'

class SerialPort extends Base {
  static initialize() {
    this.init(
      {
        uuid: {
          type: UUIDV4,
          primaryKey: true,
          defaultValue: UUIDV4,
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
        },
        ...this.getBaseFields()
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
