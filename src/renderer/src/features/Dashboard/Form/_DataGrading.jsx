import { WBDivider, WBInput } from '@renderer/components'
import { Flex, Form, Space } from 'antd'
import { useContext } from 'react'
import styled from 'styled-components'
import { DashboardContext } from '..'

function DataGrading() {
  const { form } = useContext(DashboardContext)

  const gradingChangeHandler = (name, value) => {
    form.setFieldsValue({
      [`grading_${name}_kg`]: value * 2
    })
  }

  return (
    <StyledFlex wrap>
      <WBDivider orientation="left">Detail Grading</WBDivider>
      <Form.Item label="Buah Mentah">
        <Space.Compact>
          <WBInput.Number
            name="grading_hb"
            placeholder="0.00"
            suffix="Tdn"
            onChange={(e) => gradingChangeHandler('hb', e)}
          />
          <WBInput.Number name="grading_hb_kg" placeholder="0.00" disabled suffix="Kg" />
        </Space.Compact>
      </Form.Item>
      <Form.Item label="Buah Busuk">
        <Space.Compact>
          <WBInput.Number
            name="grading_rotten_fruit"
            placeholder="0.00"
            suffix="Tdn"
            onChange={(e) => gradingChangeHandler('rotten_fruit', e)}
          />
          <WBInput.Number name="grading_rotten_fruit_kg" placeholder="0.00" disabled suffix="Kg" />
        </Space.Compact>
      </Form.Item>
      <Form.Item label="Buah Muda">
        <Space.Compact>
          <WBInput.Number
            name="grading_young_fruit"
            placeholder="0.00"
            suffix="Tdn"
            onChange={(e) => gradingChangeHandler('young_fruit', e)}
          />
          <WBInput.Number name="grading_young_fruit_kg" placeholder="0.00" disabled suffix="Kg" />
        </Space.Compact>
      </Form.Item>
      <Form.Item label="Buah Pasir">
        <Space.Compact>
          <WBInput.Number
            name="grading_sand_fruit"
            placeholder="0.00"
            suffix="Tdn"
            onChange={(e) => gradingChangeHandler('sand_fruit', e)}
          />
          <WBInput.Number name="grading_sand_fruit_kg" placeholder="0.00" disabled suffix="Kg" />
        </Space.Compact>
      </Form.Item>
      <Form.Item label="Tangkai Panjang">
        <Space.Compact>
          <WBInput.Number
            name="grading_long_stalk"
            placeholder="0.00"
            suffix="Tdn"
            onChange={(e) => gradingChangeHandler('long_stalk', e)}
          />
          <WBInput.Number name="grading_long_stalk_kg" placeholder="0.00" disabled suffix="Kg" />
        </Space.Compact>
      </Form.Item>
      <Form.Item label="Janjang Kosong">
        <Space.Compact>
          <WBInput.Number
            name="grading_jangkos"
            placeholder="0.00"
            suffix="Tdn"
            onChange={(e) => gradingChangeHandler('jangkos', e)}
          />
          <WBInput.Number name="grading_jangkos_kg" placeholder="0.00" disabled suffix="Kg" />
        </Space.Compact>
      </Form.Item>
      <Form.Item label="TBS Berair">
        <Space.Compact>
          <WBInput.Number
            name="grading_watery"
            placeholder="0.00"
            suffix="Tdn"
            onChange={(e) => gradingChangeHandler('watery', e)}
          />
          <WBInput.Number name="grading_watery_kg" placeholder="0.00" disabled suffix="Kg" />
        </Space.Compact>
      </Form.Item>
      <Form.Item label="Brondolan">
        <Space.Compact>
          <WBInput.Number
            name="grading_brondolan"
            placeholder="0.00"
            suffix="Tdn"
            onChange={(e) => gradingChangeHandler('brondolan', e)}
          />
          <WBInput.Number name="grading_brondolan_kg" placeholder="0.00" disabled suffix="Kg" />
        </Space.Compact>
      </Form.Item>
      <Form.Item label="Brondolan Busuk">
        <Space.Compact>
          <WBInput.Number
            name="grading_rotten_brondolan"
            placeholder="0.00"
            suffix="Tdn"
            onChange={(e) => gradingChangeHandler('rotten_brondolan', e)}
          />
          <WBInput.Number
            name="grading_rotten_brondolan_kg"
            placeholder="0.00"
            disabled
            suffix="Kg"
          />
        </Space.Compact>
      </Form.Item>
      <Form.Item label="Overnight/Restan">
        <Space.Compact>
          <WBInput.Number
            name="grading_restan"
            placeholder="0.00"
            suffix="Tdn"
            onChange={(e) => gradingChangeHandler('restan', e)}
          />
          <WBInput.Number name="grading_restan_kg" placeholder="0.00" disabled suffix="Kg" />
        </Space.Compact>
      </Form.Item>
      <Form.Item label="Sampah">
        <Space.Compact>
          <WBInput.Number
            name="grading_garbage"
            placeholder="0.00"
            suffix="Tdn"
            onChange={(e) => gradingChangeHandler('garbage', e)}
          />
          <WBInput.Number name="grading_garbage_kg" placeholder="0.00" disabled suffix="Kg" />
        </Space.Compact>
      </Form.Item>
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)`
  .ant-form-item {
    flex: 1 1 calc(100% / 4 - 16px);
    margin-block: 8px;
    .ant-input-number-affix-wrapper {
      width: 100%;
    }
  }
`

export default DataGrading
