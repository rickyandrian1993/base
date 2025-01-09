import {
  CloseOutlined,
  HistoryOutlined,
  SettingOutlined,
  SlidersOutlined,
  SyncOutlined
} from '@ant-design/icons'
import { FloatButton } from 'antd'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const FloatingButtonGroup = () => {
  const updateDataHandler = async () => {
    const payload = {
      config: {
        name: 'Ricky',
        email: 'mail@mail.com'
      },
      createdBy: 'admin',
      updatedBy: 'admin'
    }

    const res = await window.api.updateData('update-data', payload)
    console.log('res', res)
  }

  const getWeigh = () => {
    const options = {
      baudRate: 9600,
      dataBits: 8,
      stopBits: 1,
      parity: 'None',
      com: 'COM6'
    }
    window.api.getWeigh('get-weigh', options)
  }

  const closePort = () => window.api.closePort('close-port')

  useEffect(() => {
    window.api.setWeigh('set-weigh', (data) => console.log('data', data))

    return () => {
      window.api.onWeighData(() => {})
    }
  }, [])

  return (
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{
        insetInlineEnd: 24
      }}
      icon={<SettingOutlined />}
      tooltip={<span>Setting</span>}
    >
      <FloatButton icon={<CloseOutlined />} tooltip={<span>Close Port</span>} onClick={closePort} />
      <FloatButton
        icon={<HistoryOutlined />}
        tooltip={<span>Read Serial</span>}
        onClick={getWeigh}
      />
      <FloatButton
        icon={<SyncOutlined />}
        tooltip={<span>Update Data</span>}
        onClick={updateDataHandler}
      />
      <Link to={'/sys-config'}>
        <FloatButton icon={<SlidersOutlined />} tooltip={<span>System Configuration</span>} />
      </Link>
    </FloatButton.Group>
  )
}

export default FloatingButtonGroup
