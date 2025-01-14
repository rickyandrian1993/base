import SysConfigController from '@main/database/controllers/sysconfig.controller'
import UserController from '@main/database/controllers/userController'
import ValidationController from '@main/database/controllers/validation.controller'

export const listenerServices = {
  getDataUser: async () => await UserController.getAllUsers(),

  // System Config
  getSystemConfig: async () => await SysConfigController.getSystemConfig(),
  updateSystemConfig: async (_, payload) => await SysConfigController.updateSysConfig(payload),

  // Validation
  validatePassword: async (_, payload) => await ValidationController.validatePassword(payload)
}
