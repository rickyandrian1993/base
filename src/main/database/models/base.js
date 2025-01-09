import { BOOLEAN, DATE, Model, NOW, STRING } from 'sequelize'
import { sequelize } from '../connection'

class Base extends Model {
  static sequelize = sequelize
  static getBaseFields() {
    return {
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
        type: STRING,
        allowNull: false
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
