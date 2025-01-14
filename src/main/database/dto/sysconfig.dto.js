class SysConfigDto {
  constructor(sysconfig) {
    this.id = sysconfig.id
    this.config = sysconfig.config
    this.created_at = new Date(sysconfig.created_at).toString()
    this.updated_at = new Date(sysconfig.updated_at).toString()
  }
}

export default SysConfigDto
