import { WBForm } from '@renderer/components'
import FormSection from '@renderer/components/Section'
import { Form, Spin } from 'antd'
import { createContext, useState } from 'react'
import styled from 'styled-components'
import ActionData from './Form/_ActionData'
import DataGrading from './Form/_DataGrading'
import DataKualitas from './Form/_DataKualitas'
import DataRekapitulasi from './Form/_DataRekapitulasi'
import DataTimbang from './Form/_DataTimbang'
import DataUmum from './Form/_DataUmum'
import NoPol from './Form/_NoPol'

export const DashboardContext = createContext(null)

const Dashboard = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const ctxValues = {
    form,
    loading,
    setLoading
  }

  return (
    <Spin spinning={loading}>
      <DashboardContext.Provider value={ctxValues}>
        <PageSpace>
          <FormSection size="sm" bg="true">
            <NoPol form={form} />
            <DataUmum form={form} />
          </FormSection>
          <FormSection size="md" bg="true">
            <DataTimbang form={form} />
            <DataKualitas form={form} />
            <DataGrading form={form} />
            <DataRekapitulasi form={form} />
            <ActionData form={form} />
          </FormSection>
        </PageSpace>
      </DashboardContext.Provider>
    </Spin>
  )
}

const PageSpace = styled(WBForm)`
  display: flex;
  width: calc(100vw - 32px);
  flex-wrap: wrap;
  gap: 8px;
`

export default Dashboard
