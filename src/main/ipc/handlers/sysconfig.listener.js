import SysConfigController from '@main/database/controllers/sysconfig.controller'

export const sysconfigListener = {
  updateData: async (_, payload) => await SysConfigController.updateSysConfig(payload)
}
