import PropTypes from 'prop-types'
import styled from 'styled-components'

function FormSection({ size, bg = false, children }) {
  return (
    <StyledSection size={size} bg={bg}>
      {children}
    </StyledSection>
  )
}

const StyledSection = styled.div`
  display: flex;
  overflow-y: auto;
  flex-flow: column nowrap;
  align-items: start;
  width: 100%;
  max-height: calc(100vh - 66px);
  overflow-y: scroll;
  flex: ${({ size }) => {
    if (size === 'sm') return '1 1 40%'
    if (size === 'md') return '5 1 60%'
    return '1 1 100%'
  }};
  max-width: ${({ size }) => {
    if (size === 'sm') return 'calc(40% - 4px)'
    if (size === 'md') return 'calc(60% - 4px)'
    return 'calc(100% - 4px)'
  }};

  & > * {
    background-color: ${({ bg }) => {
      if (bg) return `var(--card-background-color)`
    }};
    border: 1px solid var(--primary-color-50);
    padding-inline: 8px;
    margin-block: 4px;
    border-radius: 4px;
  }

  .ant-flex {
    gap: 0px 8px;
    width: 100%;
  }

  .ant-form-item {
    display: flex;
    margin-block: 14px 8px;
    flex: 1 1 calc(50% - 16px);
    .ant-row .ant-form-item-label {
      background-color: var(--card-background-color);
    }
    &:nth-child(odd) {
      &:last-child:not(:nth-child(odd)) {
        flex: 1 1 calc(100% - 16px);
      }
    }
    .ant-row {
      width: 100%;
    }
  }
`

// Size Guide
// sm= 1 / 3
// md= 2 / 3
// full= fullwidth

FormSection.propTypes = {
  bg: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'full']),
  children: PropTypes.node.isRequired
}

export default FormSection
