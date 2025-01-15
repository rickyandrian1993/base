import ServiceCenter from './servicecenter'
import SystemConfig from './systemConfig'
import User from './user'

const models = {
  User,
  ServiceCenter,
  SystemConfig
}

Object.values(models).forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(models)
  }
})

export default { ...models }
