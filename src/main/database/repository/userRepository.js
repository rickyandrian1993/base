import { User } from '../models'

const UserRepository = {
  async findAll(includeDeleted = false) {
    return await User.findAll({
      where: includeDeleted ? {} : { is_deleted: false }
    })
  },

  async findById(id, includeDeleted = false) {
    return await User.findOne({
      where: { id, ...(includeDeleted ? {} : { is_deleted: false }) }
    })
  },

  async create(userData) {
    return await User.create(userData)
  },

  async update(id, userData) {
    const user = await this.findById(id)
    if (!user) throw new Error('User not found')
    return await user.update(userData)
  },

  async softDelete(id) {
    const user = await this.findById(id)
    if (!user) throw new Error('User not found')
    return await user.update({ is_deleted: true })
  },

  async activate(id) {
    const user = await this.findById(id)
    if (!user) throw new Error('User not found')
    return await user.update({ is_activated: true })
  },

  async deactivate(id) {
    const user = await this.findById(id)
    if (!user) throw new Error('User not found')
    return await user.update({ is_activated: false })
  }
}

export default UserRepository
