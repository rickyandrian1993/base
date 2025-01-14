import { Form } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function RATForm({ children, ...rest }) {
  const formItemLayout = {
    labelCol: {
      span: 24
    },
    wrapperCol: {
      span: 24
    }
  }

  return (
    <StyledForm {...formItemLayout} layout="vertical" autoComplete="off" {...rest}>
      {children}
    </StyledForm>
  )
}

const StyledForm = styled(Form)`
  width: 100%;
  .ant-flex {
    gap: 8px;
  }
  .ant-form-item {
    display: flex;
    flex: 1 1 calc(50% - 16px);
    gap: 4px;
    margin-block: 16px;
    &-required {
      &::before {
        display: none !important;
        width: 0px;
      }
      &::after {
        color: var(--danger-color);
        line-height: 1;
        content: '*' !important;
      }
    }
    &-label {
      &:has(.ant-form-item-required) > label::after {
        visibility: visible !important;
      }
    }
    &-control-input-content:has(.ant-radio-group) {
      margin: 6px 8px;
    }
    .ant-form-item-explain-error {
      margin-bottom: 8px;
      padding-inline: 8px;
    }

    .ant-row {
      position: relative;
      .ant-form-item-label {
        transition: all 0.2s ease-in;
        padding: 0 0 0 0 !important;
        padding-inline-start: 4px !important;
        margin-left: 8px !important;
        background-color: #fff;
        position: absolute;
        top: -9px;
        z-index: 1;
        line-height: 1;
        label {
          font-weight: bold;
          font-size: 12px;
          line-height: 1.2;
          &::after {
            margin-inline-end: 2px;
          }
        }
      }
      .ant-picker,
      .ant-input-number {
        width: 100%;
      }
      .ant-col:last-child > *:first-child {
        border: 1px solid var(--primary-color);
        border-radius: 6px;
        padding-block: 0;
        input {
          min-height: 30px;
        }
        &:has(:disabled) {
          border: 1px solid var(--neutral-color);
          * {
            color: var(--primary-color);
          }
          .ant-select-selection-placeholder,
          *::placeholder {
            color: var(--primary-color);
          }
        }
        .ant-input-prefix {
          margin-inline-end: 8px;
        }
        *:has(input) {
          padding-block: 0px;
        }
        *:has(input),
        *:has(textarea),
        textarea,
        input {
          font-size: 12px;
          &,
          &:hover,
          &:focus,
          &:focus-within {
            border: unset;
            outline: unset;
            background: transparent;
            box-shadow: unset;
            border-width: 0px;
          }
        }
        &:hover,
        &:focus-within {
          border-color: var(--primary-color);
        }
        &:focus-within {
          outline: 2px solid var(--primary-outline-color);
        }
        &:has(.ant-input-status-error) {
          border-color: var(--danger-color);
          &:focus-within {
            outline: unset;
          }
        }
      }
      .ant-btn {
        &,
        &:hover {
          border: none;
        }
      }
    }
    .ant-form-item-has-error {
      color: var(--danger-color) !important ;
    }
  }
  .ant-col.ant-form-item-control:has(.ant-form-item-extra) {
    display: flex;
    gap: 8px 0;
  }
  .ant-form-item-has-error label {
    color: var(--danger-color) !important;
  }
`

RATForm.propTypes = {
  children: PropTypes.node
}

export default RATForm
