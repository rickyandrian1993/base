import { HistoryOutlined, SettingOutlined, SlidersOutlined } from '@ant-design/icons'
import { FloatButton } from 'antd'
import { Link } from 'react-router-dom'

const FloatingButtonGroup = () => {
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
      <FloatButton icon={<HistoryOutlined />} tooltip={<span>Update Data</span>} />
      <Link to={'/sys-config'}>
        <FloatButton icon={<SlidersOutlined />} tooltip={<span>System Configuration</span>} />
      </Link>
    </FloatButton.Group>
  )
}

export default FloatingButtonGroup
