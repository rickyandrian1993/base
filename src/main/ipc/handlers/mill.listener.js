import MillController from '@main/database/controllers/mill.controller'

export const millListener = {
  getMillServer: async () => await MillController.getMillServer()
}
