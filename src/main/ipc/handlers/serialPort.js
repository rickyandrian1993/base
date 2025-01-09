import { mainWindow } from '@main/index'
import { logToFile } from '@main/logger'
import { ReadlineParser, SerialPort } from 'serialport'

let port = null

export const serialPortListener = {
  getWeigh: async (_, options) => {
    try {
      if (!port) {
        port = new SerialPort({
          baudRate: Number(options.baudRate),
          dataBits: options.dataBits,
          stopBits: options.stopBits,
          parity: options.parity,
          path: options.com
        })

        port.on('open', () => console.log('Port Opened: ', options.com))
      }

      const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

      parser.on('data', (data) => mainWindow.webContents.send('set-weigh', data))
    } catch (error) {
      logToFile(`Error get weigh: ${error}`)
    }
  },
  closePort: async () => {
    try {
      await port.close(() => (port = null))
    } catch (error) {
      logToFile(`Error close port: ${error}`)
    }
  }
}
