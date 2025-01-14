import { BackgroundImage, WBForm } from '@renderer/components'
import { setStorage } from '@renderer/utils/globalUtility'
import { Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import FloatingButtonGroup from './_FloatingButtonGroup'
import LoginForm from './_LoginForm'

const Login = () => {
  const [form] = Form.useForm()
  const nav = useNavigate()
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
    setStorage('isLoggedIn', true)
    nav('/dashboard')
  }

  return (
    <>
      <WBForm form={form} initialValues={{ remember: true }} onFinish={submitHandler}>
        <BackgroundImage />
        <LoginForm form={form} />
      </WBForm>
      <FloatingButtonGroup />
    </>
  )
}

export default Login
