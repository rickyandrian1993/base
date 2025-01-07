import UserController from '../../database/controllers/userController'

export const listenerServices = {
  getDataUser: async () => await UserController.getAllUsers()
}
