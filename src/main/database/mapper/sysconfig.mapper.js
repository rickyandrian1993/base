import SysConfigDto from '../dto/sysconfig.dto'

// DATA MANIPULATION
const SysConfigMapper = {
  toDto(sysconfig) {
    return new SysConfigDto(sysconfig)
  }
}

export default SysConfigMapper
