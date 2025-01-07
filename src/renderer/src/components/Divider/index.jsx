import { Divider } from 'antd'
import PropTypes from 'prop-types'

const WBDivider = ({ children }) => {
  return (
    <Divider
      style={{
        borderColor: '#7cb305'
      }}
    >
      {children}
    </Divider>
  )
}

WBDivider.propTypes = {
  children: PropTypes.node
}

export default WBDivider
