import { existsSync, promises as fsPromises, mkdirSync } from 'fs'
import path from 'path'

// Check folder exist or create new log folder
function ensureLogsDirectoryExists() {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // Add leading zero if needed

  const logsDirectory = path.join(process.cwd(), 'logs', year.toString(), month)

  if (!existsSync(logsDirectory)) {
    mkdirSync(logsDirectory, { recursive: true })
  }

  return logsDirectory
}

async function logToFile(message) {
  // Ensure that the "logs" directory exists
  const logsDirectory = ensureLogsDirectoryExists()

  const date = String(new Date().getDate()).padStart(2, '0')

  // Define the path to the log file
  const logFilePath = path.join(logsDirectory, date + '.log')

  // Create a timestamp for the log entry
  const timestamp = new Date()

  // Format the log entry
  const logEntry = `${timestamp} - ${message}\n`

  try {
    // Append the log entry to the log file
    await fsPromises.appendFile(logFilePath, logEntry)
  } catch (err) {
    console.error('Error writing to log file:', err)
  }
}

export { logToFile }
