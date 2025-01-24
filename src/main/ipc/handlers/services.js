import FingerprintController from '@main/database/controllers/fingerprint.controller'
import MillController from '@main/database/controllers/mill.controller'
import PrintController from '@main/database/controllers/print.controller'
import SerialPortController from '@main/database/controllers/serialPort.controller'
import SysConfigController from '@main/database/controllers/sysconfig.controller'
import UserController from '@main/database/controllers/userController'
import ValidationController from '@main/database/controllers/validation.controller'

export const listenerServices = {
  closePort: async () => await SerialPortController.closePort(),
  getDataUser: async () => await UserController.getAllUsers(),

  getMillServer: async () => await MillController.getMillServer(),
  getSystemConfig: async () => await SysConfigController.getSystemConfig(),
  getWeight: async () => await SerialPortController.getWeight(),
  login: async (_, payload) => await UserController.login(payload),
  printDocument: async () => await PrintController.printDocument(),
  scanFingerprint: async () => await FingerprintController.scanFingerprint(),
  updateSystemConfig: async (_, payload) => await SysConfigController.updateSysConfig(payload),
  validatePassword: async (_, payload) => await ValidationController.validatePassword(payload)
}
