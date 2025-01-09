class SysConfigDto {
  constructor(sysconfig) {
    this.id = sysconfig.id
    this.config = sysconfig.config
    this.createdBy = sysconfig.createdBy
    this.updatedBy = sysconfig.updatedBy
  }
}

export default SysConfigDto
