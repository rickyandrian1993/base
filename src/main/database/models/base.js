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
      is_actived: {
        type: BOOLEAN,
        defaultValue: true
      },
      is_deleted: {
        type: BOOLEAN,
        defaultValue: false
      },
      created_at: {
        type: DATE,
        defaultValue: NOW
      },
      created_by: {
        type: STRING
      },
      updated_at: {
        type: DATE,
        defaultValue: NOW
      },
      updated_by: {
        type: STRING
      }
    }
  }
}

export default Base
