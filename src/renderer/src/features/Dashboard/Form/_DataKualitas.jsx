import { WBDivider, WBInput } from '@renderer/components'
import { Flex } from 'antd'
import styled from 'styled-components'

function DataKualitas() {
  return (
    <StyledFlex wrap>
      <WBDivider orientation="left">Kualitas</WBDivider>
      <WBInput.Number name="quality_ffa" label="FFA" suffix="%" placeholder="0.00" />
      <WBInput.Number name="quality_moist" label="Moist" suffix="%" placeholder="0.00" />
      <WBInput.Number name="quality_dirt" label="Dirt" suffix="%" placeholder="0.00" />
      <WBInput.Number name="quality_pv" label="PV" suffix="%" placeholder="0.00" />
      <WBInput.Number name="quality_bk" label="BK" suffix="%" placeholder="0.00" />
      <WBInput.Number name="quality_dobi" label="Dobi" placeholder="0.0000" />
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)`
  .ant-form-item {
    flex: 1 1 calc(100% / 6 - 16px);
    .ant-input-number-affix-wrapper {
      width: 100%;
    }
  }
`

export default DataKualitas
