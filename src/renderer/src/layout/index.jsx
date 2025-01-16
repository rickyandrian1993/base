import MainRoutes from '@renderer/routes/index'
import { Layout } from 'antd'
import styled from 'styled-components'
import Navbar from './_Navbar'

function AppLayout() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <MainRoutes />
      </Content>
    </Layout>
  )
}

const Content = styled.div`
  height: calc(100vh - 50px);
  max-width: calc(100vw - 40px);
  margin: 8px 20px;
`

export default AppLayout
