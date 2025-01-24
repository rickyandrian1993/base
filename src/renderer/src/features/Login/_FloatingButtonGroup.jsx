import { SettingOutlined, SlidersOutlined } from '@ant-design/icons'
import { FloatButton } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ValidatePassword from './_ValidatePassword'

const FloatingButtonGroup = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const navigateHandler = () => {
    setOpen(false)
    navigate('/config')
  }

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
          icon={<SlidersOutlined />}
          tooltip={<span>System Configuration</span>}
          onClick={() => setOpen(true)}
        />
      </FloatButton.Group>
    </>
  )
}

export default FloatingButtonGroup
