import { BOOLEAN, DATE, Model, NOW, STRING, UUIDV4 } from 'sequelize'
import { sequelize } from '../connection'

class Base extends Model {
  static sequelize = sequelize
  static getBaseFields() {
    return {
      uuid: {
        type: UUIDV4,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false
      },
      isActived: {
        type: BOOLEAN,
        defaultValue: true
      },
      isDeleted: {
        type: BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: DATE,
        defaultValue: NOW
      },
      createdBy: {
        type: STRING
      },
      updatedAt: {
        type: DATE,
        defaultValue: NOW
      },
      updatedBy: {
        type: STRING
      }
    }
  }
}

export default Base
