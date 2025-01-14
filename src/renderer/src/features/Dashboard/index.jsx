import { WBForm } from '@renderer/components'
import Section from '@renderer/components/Section'
import { Form } from 'antd'
import styled from 'styled-components'
import LeftForm from './_LeftForm'

const Dashboard = () => {
  const [form] = Form.useForm()

  return (
    <PageSpace>
      <Section size="sm" bg>
        <LeftForm form={form} />
      </Section>
      <Section size="md" bg>
        <h3>Dahsboard 2/3</h3>
        <h3>Dahsboard 2/3</h3>
        <h3>Dahsboard 2/3</h3>
      </Section>
    </PageSpace>
  )
}

const PageSpace = styled(WBForm)`
  display: flex;
  width: calc(100vw - 36px);
  height: 100;
  flex-wrap: wrap;
  gap: 8px;
`

export default Dashboard
