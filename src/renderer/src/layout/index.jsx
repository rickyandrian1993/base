import MainRoutes from '@renderer/routes/index'
import { Layout } from 'antd'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './_Navbar'

function AppLayout() {
  const loc = useLocation().pathname
  console.log('loc', loc)
  return (
    <Layout>
      <Navbar />
      <Content>
        <h1>Applayout {loc}</h1>
        <MainRoutes />
        {/* <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="weight" element={<Dashboard />} />
          <Route path="history" element={<Dashboard />} />
          <Route path="report" element={<Report />} />
          <Route path="upload" element={<Dashboard />} />{' '}
        </Routes> */}
      </Content>
    </Layout>
  )
}

const Content = styled.div`
  min-height: calc(100vh - 50px);
`

export default AppLayout
