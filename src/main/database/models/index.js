import SerialPort from './serialport'
import ServiceCenter from './servicecenter'
import SystemConfig from './SystemConfig'
import User from './user'

const models = {
  User,
  ServiceCenter,
  SerialPort,
  SystemConfig
}

Object.values(models).forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(models)
  }
})

export default { ...models }
