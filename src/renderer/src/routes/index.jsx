import { Dashboard, History, Report, Upload, Weight } from '@renderer/features'
import { memo } from 'react'
import { useRoutes } from 'react-router-dom'

export const MenuList = [
  { id: 1, path: '/dashboard', name: 'Dashboard', element: <Dashboard /> },
  { id: 2, path: '/weight', name: 'Weight', element: <Weight /> },
  { id: 3, path: '/history', name: 'History', element: <History /> },
  { id: 4, path: '/report', name: 'Report', element: <Report /> },
  { id: 5, path: '/upload', name: 'Upload', element: <Upload /> }
]

const MainRoutes = () => {
  const element = useRoutes(MenuList)

  return element
}

export default memo(MainRoutes)
