import { SettingOutlined, SlidersOutlined, SyncOutlined } from '@ant-design/icons'
import { FloatButton } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ValidatePassword from './_ValidatePassword'

const FloatingButtonGroup = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  // const updateDataHandler = async () => {
  //   const payload = {
  //     config: {
  //       name: 'Ricky',
  //       email: 'mail@mail.com'
  //     },
  //     createdBy: 'admin',
  //     updatedBy: 'admin'
  //   }

  //   const res = await window.api.updateData('update-data', payload)
  //   console.log('res', res)
  // }

  // const getWeigh = () => {
  //   const options = {
  //     baudRate: 9600,
  //     dataBits: 8,
  //     stopBits: 1,
  //     parity: 'None',
  //     com: 'COM6'
  //   }
  //   window.api.getWeigh('get-weigh', options)
  // }

  // const closePort = () => window.api.closePort('close-port')

  const navigateHandler = () => {
    setOpen(false)
    navigate('/config')
  }

  // useEffect(() => {
  //   window.api.setWeigh('set-weigh', (data) => console.log('data', data))

  //   return () => {
  //     window.api.setWeigh(() => {})
  //   }
  // }, [])

  return (
    <>
      {open && (
        <ValidatePassword open={open} onCancel={() => setOpen(false)} onSuccess={navigateHandler} />
      )}
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          insetInlineEnd: 24
        }}
        icon={<SettingOutlined />}
        tooltip={<span>Setting</span>}
      >
        <FloatButton
          icon={<SyncOutlined />}
          tooltip={<span>Update Data</span>}
          // onClick={updateDataHandler}
        />
        <FloatButton
          icon={<SlidersOutlined />}
          tooltip={<span>System Configuration</span>}
          onClick={() => setOpen(true)}
        />
      </FloatButton.Group>
    </>
  )
}

export default FloatingButtonGroup
