import PropTypes from 'prop-types'
import styled from 'styled-components'

function Section({ size, bg = false, children }) {
  return (
    <StyledSection size={size} bg={bg}>
      {children}
    </StyledSection>
  )
}

const StyledSection = styled.div`
  display: flex;
  max-height: calc(100vh - 66px);
  overflow-y: auto;
  background-color: ${({ bg }) => {
    console.log('bg', bg)
    if (bg) return `var(--primary-color-20)`
  }};
  border: 1px solid var(--primary-color-50);
  border-radius: 4px;
  padding: 8px;
  flex: ${({ size }) => {
    if (size === 'sm') return '1 1 33%'
    if (size === 'md') return '5 1 66%'
    return '1 1 100%'
  }};
  flex-wrap: wrap;
`

// Size Guide
// sm= 1 / 3
// md= 2 / 3
// full= fullwidth

Section.propTypes = {
  bg: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'full']),
  children: PropTypes.node.isRequired
}

export default Section
