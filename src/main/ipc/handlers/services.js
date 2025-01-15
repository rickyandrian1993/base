import FingerprintController from '@main/database/controllers/fingerprint.controller'
import SysConfigController from '@main/database/controllers/sysconfig.controller'
import UserController from '@main/database/controllers/userController'
import ValidationController from '@main/database/controllers/validation.controller'

export const listenerServices = {
  getDataUser: async () => await UserController.getAllUsers(),

  getSystemConfig: async () => await SysConfigController.getSystemConfig(),
  scanFingerprint: async () => await FingerprintController.scanFingerprint(),
  updateSystemConfig: async (_, payload) => await SysConfigController.updateSysConfig(payload),
  validatePassword: async (_, payload) => await ValidationController.validatePassword(payload)
}
