import { useEffect, useState } from 'react'
import electronLogo from './assets/electron.svg'
import Versions from './components/Versions'

function App() {
  const [timbangan, setTimbangan] = useState(0)
  const [message, setMessage] = useState(null)

  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  useEffect(() => {
    window.api.onMessage('message-from-main', (data) => setMessage(data))
    window.api.onWeighData('weigh-data', (data) => setTimbangan(data))

    return () => {
      window.api.onMessage(() => {})
      window.api.onWeighData(() => {})
    }
  }, [])

  const sendMessage = () => {
    window.api.sendMessage('message-from-react', 'Hello from React!')
  }

  const readWeigh = () => {
    const options = {
      baudRate: 9600,
      dataBits: 8,
      stopBits: 1,
      parity: 'None',
      com: 'COM6'
    }
    window.api.readWeigh('read-weigh', options)
  }

  const closePort = () => {
    window.api.closePort('close-port')
  }

  return (
    <>
      <span>{timbangan}</span>
      <span>{message}</span>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
          <button onClick={sendMessage}>Send IPC</button>
          <button onClick={readWeigh}>Read serial</button>
          <button onClick={closePort}>Close port</button>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
