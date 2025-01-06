import { Button } from 'antd'
import PropTypes from 'prop-types'

const WBButton = ({ title, onClick, ...rest }) => {
  return (
    <Button type="primary" onClick={onClick} {...rest}>
      {title}
    </Button>
  )
}

WBButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default WBButton
