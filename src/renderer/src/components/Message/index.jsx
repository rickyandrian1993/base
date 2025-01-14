import { message } from 'antd'

function WBMessage({ type, data = '' }) {
  message.config({ maxCount: 1 })

  return message.open({
    type: type,
    content: data
  })
}

export default WBMessage
