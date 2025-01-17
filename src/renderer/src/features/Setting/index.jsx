import { BackgroundImage, WBButton } from '@renderer/components'
import { Card, Col, Divider, Row, Typography } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Fingerprint from './_FingerprintSetting'
import MillSetting from './_MillSetting'
import PortSetting from './_PortSetting'

const Setting = () => {
  const [modal, setModal] = useState({
    port: { open: false },
    mill: { open: false },
    fingerprint: { open: false }
  })

  const modalHandler = (section, state) =>
    setModal((prev) => ({ ...prev, [section]: { open: state } }))

  return (
    <>
      {modal.port.open && (
        <PortSetting open={modal.port.open} onCancel={() => modalHandler('port', false)} />
      )}

      {modal.mill.open && (
        <MillSetting open={modal.mill.open} onCancel={() => modalHandler('mill', false)} />
      )}

      {modal.fingerprint.open && (
        <Fingerprint
          open={modal.fingerprint.open}
          onCancel={() => modalHandler('fingerprint', false)}
        />
      )}

      <BackgroundImage />
      <StyledCard>
        <Row justify="center" gutter={[24, 24]}>
          <Col span={24} style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 2 }}>
            <Typography.Title style={{ textAlign: 'center' }}>
              Sistem Configuration
            </Typography.Title>
            <Divider style={{ borderColor: '#7cb305' }} />
          </Col>
        </Row>
        <Row
          justify="center"
          gutter={[24, 24]}
          style={{ maxHeight: 'calc(100% - (46px + 24px + 24px))', overflowY: 'auto' }}
        >
          <Col span={6}>
            <WBButton title="Port" variant="outlined" onClick={() => modalHandler('port', true)} />
          </Col>
          <Col span={6}>
            <WBButton title="Mill" variant="outlined" onClick={() => modalHandler('mill', true)} />
          </Col>
          <Col span={6}>
            <WBButton
              title="Fingerprint"
              variant="outlined"
              onClick={() => modalHandler('fingerprint', true)}
            />
          </Col>
          <Col span={6}>
            <WBButton title="Editor" variant="outlined" />
          </Col>
          <Col span={6}>
            <Link to="/login">
              <WBButton danger title="Back" />
            </Link>
          </Col>
        </Row>
      </StyledCard>
    </>
  )
}

const StyledCard = styled(Card)`
  width: calc(100% - 24px);
  max-height: calc(100vh - 24px);
  .ant-card-body {
    height: inherit;
  }
`

export default Setting
