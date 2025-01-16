import { BackgroundImage } from '@renderer/components'
import FloatingButtonGroup from './_FloatingButtonGroup'
import LoginForm from './_LoginForm'

const Login = () => {
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

  return (
    <>
      <BackgroundImage />
      <LoginForm />
      <FloatingButtonGroup />
    </>
  )
}

export default Login
