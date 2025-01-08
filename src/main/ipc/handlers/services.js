import UserController from '@main/database/controllers/userController'

export const listenerServices = {
  getDataUser: async () => await UserController.getAllUsers()
}
