import UserMapper from '../../mapper/userMapper'
import UserRepository from '../../repository/userRepository'

const UserController = {
  async getAllUsers() {
    const users = await UserRepository.findAll()
    return UserMapper.toDtoList(users)
  },

  async getUserById(id) {
    const user = await UserRepository.findById(id)
    if (!user) throw new Error('User not found')
    return UserMapper.toDto(user)
  },

  async createUser(userData) {
    const user = await UserRepository.create(userData)
    return UserMapper.toDto(user)
  },

  async updateUser(id, userData) {
    const user = await UserRepository.update(id, userData)
    return UserMapper.toDto(user)
  },

  async deleteUser(id) {
    return await UserRepository.softDelete(id)
  }
}

export default UserController