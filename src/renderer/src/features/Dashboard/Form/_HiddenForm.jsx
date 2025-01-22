import { WBInput } from '@renderer/components'
import { Form } from 'antd'

const HiddenForm = () => {
  return (
    <>
      <Form.Item name="commodity_id" hidden={true}>
        <WBInput.Text />
      </Form.Item>
      <Form.Item name="driver_id" hidden={true}>
        <WBInput.Text />
      </Form.Item>
      <Form.Item name="estate_id" hidden={true}>
        <WBInput.Text />
      </Form.Item>
      <Form.Item name="estate_level_id_1" hidden={true}>
        <WBInput.Text />
      </Form.Item>
      <Form.Item name="estate_level_id_2" hidden={true}>
        <WBInput.Text />
      </Form.Item>
      <Form.Item name="estate_level_id_3" hidden={true}>
        <WBInput.Text />
      </Form.Item>
      <Form.Item name="mill_id" hidden={true}>
        <WBInput.Text />
      </Form.Item>
    </>
  )
}

export default HiddenForm
