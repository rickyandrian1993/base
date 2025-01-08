import { Button } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const WBButton = ({ title, onClick, ...rest }) => {
  return (
    <StyledButton type="primary" onClick={onClick} {...rest}>
      {title}
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  /* ${({ fullwidth }) => fullwidth && `width: 100%; margin-inline: 8px`} */
  width: 200px;
`

WBButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default WBButton
