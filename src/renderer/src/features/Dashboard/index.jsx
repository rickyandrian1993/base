import { WBForm } from '@renderer/components'
import FormSection from '@renderer/components/Section'
import { Form } from 'antd'
import styled from 'styled-components'
import ActionData from './Form/_ActionData'
import DataGrading from './Form/_DataGrading'
import DataKualitas from './Form/_DataKualitas'
import DataRekapitulasi from './Form/_DataRekapitulasi'
import DataTimbang from './Form/_DataTimbang'
import DataUmum from './Form/_DataUmum'
import NoPol from './Form/_NoPol'

const Dashboard = () => {
  const [form] = Form.useForm()

  return (
    <PageSpace>
      <FormSection size="sm" bg>
        <NoPol form={form} />
        <DataUmum form={form} />
      </FormSection>
      <FormSection size="md" bg>
        <DataTimbang form={form} />
        <DataKualitas form={form} />
        <DataGrading form={form} />
        <DataRekapitulasi form={form} />
        <ActionData form={form} />
      </FormSection>
    </PageSpace>
  )
}

const PageSpace = styled(WBForm)`
  display: flex;
  width: calc(100vw - 32px);
  flex-wrap: wrap;
  gap: 8px;
`

export default Dashboard
