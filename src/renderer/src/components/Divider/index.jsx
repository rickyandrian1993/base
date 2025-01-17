import { Divider } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const WBDivider = ({ children }) => {
  return (
    <StyledDivider style={{ borderColor: '#7cb305', margin: '4px 0' }}>{children}</StyledDivider>
  )
}
const StyledDivider = styled(Divider)`
  span {
    font-size: 12px;
    font-weight: bold;
  }
`

WBDivider.propTypes = {
  children: PropTypes.node
}

export default WBDivider
