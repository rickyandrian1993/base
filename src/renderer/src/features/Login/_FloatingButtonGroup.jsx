import { SettingOutlined, SlidersOutlined } from '@ant-design/icons'
import { FloatButton } from 'antd'
import { useEffect, useState } from 'react'
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

  // const getWeight = () => window.api.getWeight('get-weight')

  // const closePort = () => window.api.closePort('close-port')

  const navigateHandler = () => {
    setOpen(false)
    navigate('/config')
  }

  useEffect(() => {
    window.api.onMessage('message-from-main', (data) => console.log('data', data))
    window.api.setWeight('set-weight', (data) => console.log('data', data))

    return () => {
      window.api.onMessage(() => {})
      window.api.setWeight(() => {})
    }
  }, [])

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
        {/* <FloatButton
          icon={<CloseOutlined />}
          tooltip={<span>Close Port</span>}
          onClick={closePort}
        />
        <FloatButton icon={<ApiOutlined />} tooltip={<span>Get Weigh</span>} onClick={getWeight} /> */}
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
