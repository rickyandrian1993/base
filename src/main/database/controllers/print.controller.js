import { mainWindow } from '@main/index'
import { logToFile } from '@main/logger'

const PrintController = {
  async printDocument() {
    try {
      mainWindow.webContents.print(
        { silent: true, printBackground: true },
        (success, errorType) => {
          if (!success) {
            logToFile(`Error print document (errorType): ${errorType}`)
            mainWindow.webContents.send('message-from-main', 'Failed to print')
          } else console.log('Print success')
        }
      )
    } catch (error) {
      mainWindow.webContents.send('message-from-main', 'Failed to print')
      logToFile(`Error print document: ${error}`)
    }
  }
}

export default PrintController
