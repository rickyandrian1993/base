import { mainWindow } from '@main/index'
import { logToFile } from '@main/logger'
import { ReadlineParser, SerialPort } from 'serialport'
import SysConfigController from './sysconfig.controller'

let port = null

const SerialPortController = {
  async getWeight() {
    try {
      const config = await SysConfigController.getSystemConfig()
      const portCheck = !!config?.data?.config
      if (portCheck) {
        if (!port) {
          const conOpts = JSON.parse(config.data.config)

          port = new SerialPort({
            baudRate: Number(conOpts.port_setting.baudrate),
            dataBits: conOpts.port_setting.databits,
            stopBits: conOpts.port_setting.stopbits,
            parity: conOpts.port_setting.parity,
            path: conOpts.port_setting.com
          })

          port.on('open', () => console.log('Port Opened: ', conOpts.port_setting.com))
        }

        const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

        parser.on('data', (data) => mainWindow.webContents.send('set-weight', data))
      } else {
        mainWindow.webContents.send('message-from-main', 'System config for port not available')
      }
    } catch (error) {
      logToFile(`Error get weight: ${error}`)
      mainWindow.webContents.send('message-from-main', 'Failed to get weight')
    }
  },

  async closePort() {
    try {
      await port.close(() => (port = null))
    } catch (error) {
      logToFile(`Error close port: ${error}`)
    }
  }
}

export default SerialPortController
