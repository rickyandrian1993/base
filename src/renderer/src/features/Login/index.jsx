import { WBForm } from '@renderer/components'
import { Form } from 'antd'
import FloatingButtonGroup from './_FloatingButtonGroup'
import LoginForm from './_LoginForm'

const Login = () => {
  const [form] = Form.useForm()
  // const groupedOptions = [
  //   {
  //     label: 'Second Weigh',
  //     options: ['KB1234AC', 'KB1111AC', 'KB4838LK']
  //   },
  //   {
  //     label: 'Master Vehicle',
  //     options: ['KB2222AA', 'KB3333AB', 'KB9230AJ']
  //   }
  // ]

  const submitHandler = (values) => {
    console.log(values)
  }

  return (
    <>
      <WBForm form={form} initialValues={{ remember: true }} onFinish={submitHandler}>
        <LoginForm form={form} />
      </WBForm>
      <FloatingButtonGroup />
    </>
  )
}

export default Login
