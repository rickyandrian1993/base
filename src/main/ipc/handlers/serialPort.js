import { mainWindow } from '@main/index'
import { ReadlineParser, SerialPort } from 'serialport'

let port = null

export const listenerSerialPort = {
  readWeight: async (event, options) => {
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

      parser.on('data', (data) => {
        console.log('serial data: ', data)
        mainWindow.webContents.send('weigh-data', data)
      })
    } catch (error) {
      console.log('Error: ', error)
    }
  },
  closePort: async () => {
    try {
      await port.close(() => {
        console.log('Port Close')
        port = null
        // port.on('error', (err) => ) // return error to client
      })
    } catch (error) {
      console.log('Error close port: ', error)
    }
  }
}
