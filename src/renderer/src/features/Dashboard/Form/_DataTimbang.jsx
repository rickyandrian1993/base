import { WBDivider, WBInput } from '@renderer/components'
import { Flex } from 'antd'
import styled from 'styled-components'

function DataTimbang() {
  return (
    <StyledFlex wrap>
      <WBDivider orientation="left">Data Timbang</WBDivider>
      <WBInput.Number
        name="first_w"
        label="Timbangan Pertama"
        suffix="Kg"
        placeholder="0.00"
        size="large"
        disabled
      />
      <WBInput.Number
        name="second_w"
        label="Timbangan Kedua"
        suffix="Kg"
        placeholder="0.00"
        size="large"
        disabled
      />
      <WBInput.Number
        name="nettow_w"
        label="Netto"
        suffix="Kg"
        placeholder="0.00"
        size="large"
        disabled
      />
      <WBInput.Number
        name="cut"
        label="Potongan"
        suffix="Kg"
        placeholder="0.00"
        size="large"
        disabled
      />
      <WBInput.Number
        name="after_cut"
        label="Setelah Potongan"
        suffix="Kg"
        placeholder="0.00"
        size="large"
        disabled
      />
      <WBInput.Number name="bjr" label="BJR" suffix="Kg" placeholder="0.00" size="large" disabled />
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)`
  .ant-form-item {
    flex: 1 1 calc(100% / 3 - 16px);
  }
`

export default DataTimbang
