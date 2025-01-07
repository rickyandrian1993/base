import { BackgroundImage, WBDivider } from '@renderer/components'
import { Card, Col, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Setting = () => {
  return (
    <>
      <BackgroundImage />
      <StyledCard>
        <Row justify="center" gutter={[24, 24]}>
          <Col span={24} style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 2 }}>
            <Typography.Title style={{ textAlign: 'center' }}>
              Sistem Configuration
            </Typography.Title>
            <WBDivider />
          </Col>
        </Row>
        <Row
          justify="center"
          gutter={[24, 24]}
          style={{ maxHeight: 'calc(100% - (46px + 24px + 24px))', overflowY: 'auto' }}
        >
          <Col span={12}>
            <Card>Port Setting</Card>
          </Col>
          <Col span={12}>
            <Card>Mill Setting</Card>
          </Col>
          <Col span={12}>
            <Card>System Config</Card>
          </Col>
          <Col span={12}>
            <Card>System Config</Card>
          </Col>
          <Col span={12}>
            <Card>System Config</Card>
          </Col>
          <Col span={12}>
            <Card>System Config</Card>
          </Col>
          <Col span={12}>
            <Card>Port Setting</Card>
          </Col>
          <Col span={12}>
            <Card>System Config</Card>
          </Col>
          <Col span={12}>
            <Card>System Config</Card>
          </Col>
          <Col span={12}>
            <Card>System Config</Card>
          </Col>
          <Col span={12}>
            <Card>Port Setting</Card>
          </Col>
          <Col span={12}>
            <Card>System Config</Card>
          </Col>
          <Col span={12}>
            <Card>System Config</Card>
          </Col>
          <Col span={12}>
            <Card>System Config</Card>
          </Col>
          <Col span={12}>
            <Link to="/login">
              <Card style={{ textAlign: 'center' }}>Back to Login</Card>
            </Link>
          </Col>
        </Row>
      </StyledCard>
    </>
  )
}

const StyledCard = styled(Card)`
  width: calc(100% - 24px);
  height: calc(100vh - 24px);
  overflow-y: hidden;
  .ant-card-body {
    height: inherit;
  }
`

export default Setting
