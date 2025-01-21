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

  const submitHandler = (values) => {
    console.log('values', values)
  }

  return (
    <Spin spinning={loading}>
      <DashboardContext.Provider value={ctxValues}>
        <PageSpace form={form} onFinish={submitHandler}>
          <FormSection size="sm" bg="true">
            <NoPol />
            <DataUmum />
          </FormSection>
          <FormSection size="md" bg="true">
            <DataTimbang />
            <DataKualitas />
            <DataGrading />
            <DataRekapitulasi />
            <ActionData />
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
