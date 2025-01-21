import { WBDivider, WBInput } from '@renderer/components'
import { Flex } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function DataKualitas({ form }) {
  return (
    <StyledFlex wrap>
      <WBDivider orientation="left">Kualitas</WBDivider>
      <WBInput.Number name="quality_ffa" label="FFA" addonAfter="%" placeholder="0.00" />
      <WBInput.Number name="quality_moist" label="Moist" addonAfter="%" placeholder="0.00" />
      <WBInput.Number name="quality_dirt" label="Dirt" addonAfter="%" placeholder="0.00" />
      <WBInput.Number name="quality_pv" label="PV" addonAfter="%" placeholder="0.00" />
      <WBInput.Number name="quality_bk" label="BK" addonAfter="%" placeholder="0.00" />
      <WBInput.Number name="quality_dobi" label="Dobi" placeholder="0.0000" />
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)`
  .ant-form-item {
    flex: 1 1 calc(100% / 6 - 16px);
  }
`
DataKualitas.propTypes = {
  form: PropTypes.object.isRequired
}

export default DataKualitas
