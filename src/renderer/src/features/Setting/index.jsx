import { Button, Col, Divider, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Setting = () => {
  return (
    <>
      <Row>
        <Typography.Title>Weigh Bridge Setting</Typography.Title>
      </Row>
      <Divider />
      <Row gutter={[24, 24]} justify="center">
        <Col md={{ span: 6 }} lg={{ span: 4 }}>
          <Link to={'/login'}>
            <StyledButton>System Config</StyledButton>
          </Link>
        </Col>
        <Col md={{ span: 6 }} lg={{ span: 4 }}>
          <Link to={'/login'}>
            <StyledButton>Back to Login</StyledButton>
          </Link>
        </Col>
        <Col md={{ span: 6 }} lg={{ span: 4 }}>
          <Link to={'/login'}>
            <StyledButton>Back to Login</StyledButton>
          </Link>
        </Col>
        <Col md={{ span: 6 }} lg={{ span: 4 }}>
          <Link to={'/login'}>
            <StyledButton>Back to Login</StyledButton>
          </Link>
        </Col>
        <Col md={{ span: 6 }} lg={{ span: 4 }}>
          <Link to={'/login'}>
            <StyledButton>Back to Login</StyledButton>
          </Link>
        </Col>
        <Col md={{ span: 6 }} lg={{ span: 4 }}>
          <Link to={'/login'}>
            <StyledButton>Back to Login</StyledButton>
          </Link>
        </Col>
      </Row>
      <Row>
        <Link to={'/login'}>
          <StyledButton>Back to Login</StyledButton>
        </Link>
      </Row>
    </>
  )
}

const StyledButton = styled(Button)`
  height: 120px;
  color: #fff;
  line-height: 120px;
  background: #0092ff;
  border-radius: 4px;
`

export default Setting
