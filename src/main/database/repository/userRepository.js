// import { User } from '../models'
import models from '../models'

const { User } = models

const UserRepository = {
  async findAll(includeDeleted = false) {
    return await User.findAll({
      where: includeDeleted ? {} : { isDeleted: false }
    })
  },

  async findById(id, includeDeleted = false) {
    return await User.findOne({
      where: { id, ...(includeDeleted ? {} : { isDeleted: false }) }
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
    return await user.update({ isDeleted: true })
  },

  async activate(id) {
    const user = await this.findById(id)
    if (!user) throw new Error('User not found')
    return await user.update({ isActived: true })
  },

  async deactivate(id) {
    const user = await this.findById(id)
    if (!user) throw new Error('User not found')
    return await user.update({ isActived: false })
  }
}

export default UserRepository
