// DATA MANIPULATION
import UserDto from '../dto/userDto'

const UserMapper = {
  toDto(user) {
    return new UserDto(user)
  },

  toDtoList(users) {
    return users.map((user) => new UserDto(user))
  }
}

export default UserMapper
