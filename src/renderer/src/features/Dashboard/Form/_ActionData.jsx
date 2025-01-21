import { WBButton } from '@renderer/components'
import { Col, Flex, Input, Row } from 'antd'
import styled from 'styled-components'

function ActionData() {
  return (
    <ActionStyled gutter={[0, 8]}>
      <Col span={12}>
        <Input.TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{
            minRows: 4,
            maxRows: 6
          }}
          disabled
        />
      </Col>
      <Col span={12}>
        <Flex justify="space-around" gap={8} wrap>
          <WBButton title="Bersihkan" danger />
          <WBButton title="NFC" />
          <WBButton title="Timbang" />
          <WBButton type="primary" htmlType="submit" title="Simpan" />
        </Flex>
      </Col>
    </ActionStyled>
  )
}

const ActionStyled = styled(Row)`
  padding: 8px;
`

export default ActionData
