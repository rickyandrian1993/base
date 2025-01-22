import { WBDivider, WBInput } from '@renderer/components'
import { Flex } from 'antd'
import { useContext } from 'react'
import styled from 'styled-components'
import { DashboardContext } from '..'

function DataRekapitulasi() {
  const { rekapData } = useContext(DashboardContext)

  return (
    <StyledFlex wrap>
      <WBDivider orientation="left">Rekapitulasi</WBDivider>
      <WBInput.Number defaultValue={rekapData.tbs} label="TBS" placeholder="0.00" disabled />
      <WBInput.Number defaultValue={rekapData.cpo} label="CPO" placeholder="0.00" disabled />
      <WBInput.Number defaultValue={rekapData.kernel} label="Kernel" placeholder="0.00" disabled />
      <WBInput.Number
        defaultValue={rekapData.others}
        label="Lain-lain"
        placeholder="0.00"
        disabled
      />
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)`
  .ant-form-item {
    flex: 1 1 calc(100% / 5 - 16px);
    &:last-child {
      flex: 3 1 calc(100% / 5 * 2 - 16px);
    }
  }
`

export default DataRekapitulasi
