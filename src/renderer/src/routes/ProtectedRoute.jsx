import { getStorage } from '@renderer/utils/globalUtility'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const auth = getStorage('isLoggedIn')

  return auth ? <Outlet /> : <Navigate to={'/login'} replace />
}

export default ProtectedRoute
