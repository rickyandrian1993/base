import { app } from 'electron'
import path from 'path'
import { Sequelize } from 'sequelize'

const isDev = !app.isPackaged
const devDbPath = path.join(__dirname, `database/${import.meta.env.VITE_DB_PATH}`)
const prodDbPath = path.join(app.getPath('userData'), `database/${import.meta.env.VITE_DB_PATH}`)
const dbPath = isDev ? devDbPath : prodDbPath
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: false // Matikan log query (opsional)
})
const initConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection established successfully.')
    await sequelize.sync({ alter: true })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export { initConnection, sequelize }
