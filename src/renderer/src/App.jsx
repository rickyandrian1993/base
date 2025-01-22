// import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { WBButton } from './components'
import { useEffect } from 'react'
import { Login, Setting } from './features'
import AppLayout from './layout'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  useEffect(() => {
    window.api.onMessage('message-from-main', (data) => {
      // WBMessage({ type: 'success', data: response?.message || 'Request success' })
      console.log('data', data)
    })

    return () => window.api.onMessage(() => {})
  }, [])

  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="*" element={<AppLayout />} />
        </Route>
        <Route path="/config">
          <Route index element={<Setting />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
