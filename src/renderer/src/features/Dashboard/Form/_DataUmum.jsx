import { WBDivider, WBInput } from '@renderer/components'
import { comOptions, validator } from '@renderer/utils/constants'
import { Flex, Form, Input } from 'antd'
import { useContext } from 'react'
import styled from 'styled-components'
import { DashboardContext } from '..'

function DataUmum() {
  const { form } = useContext(DashboardContext)

  return (
    <StyledContainer wrap>
      <WBDivider orientation="left">Data Umum</WBDivider>
      <WBInput.Text
        name="driver"
        label="Supir"
        rules={[validator.require]}
        onChange={(e) => {
          const value = e.target.value.toUpperCase()
          form.setFieldsValue({
            [e.target.name]: value.replace(new RegExp(/[^A-Z_0-9]/gi), ''),
            driver_id: value.replace(new RegExp(/[^A-Z_0-9]/gi), '')
          })
        }}
        allowClear
      />
      <WBInput.Text name="estate" label="Estate" disabled />
      <WBInput.Select
        name="expedition_id"
        label="Ekspedisi"
        rules={[validator.require]}
        options={comOptions}
        allowClear
      />
      <WBInput.Text name="afdeling" label="Afdeling" disabled />
      <WBInput.Select
        name="supplier_id"
        label="Supplier"
        rules={[validator.require]}
        options={comOptions}
        allowClear
      />
      <WBInput.Text name="subblock" label="Sub Block" disabled />
      <WBInput.Select
        name="customer_id"
        label="Customer"
        rules={[validator.require]}
        options={comOptions}
        allowClear
      />
      <WBInput.Number name="total_tandan" label="Jumlah Tandan" placeholder="0.00" suffix="Tdn" />
      <WBInput.Select
        name="commodity_id"
        label="Komoditi"
        rules={[validator.require]}
        options={comOptions}
        allowClear
      />
      <WBInput.Number name="total_brondolan" label="Brondolan" placeholder="0.00" suffix="Kg" />
      <WBInput.Text name="loader" label="Pemuat" allowClear />
      <WBInput.Number name="spb_weight" label="Berat SPB" placeholder="0.00" suffix="Kg" />
      <WBDivider />
      <WBInput.Text name="spb_number" label="No. SPB" allowClear />
      <WBInput.Date name="spb_date" label="Tanggal SPB" allowClear />
      <WBInput.Text name="do_number" label="No. DO" allowClear />
      <WBInput.Date name="do_date" label="Tanggal DO" allowClear />
      <Flex>
        <WBInput.Text name="seal_number" label="Seals" allowClear />
      </Flex>
      <Flex>
        <Form.Item name="notes" label="Catatan">
          <Input.TextArea placeholder="Tulis Catatan" autoSize={false} maxLength={200} allowClear />
        </Form.Item>
      </Flex>
    </StyledContainer>
  )
}

const StyledContainer = styled(Flex)``

export default DataUmum
