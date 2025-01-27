import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true
    }}
  >
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </React.Suspense>
  </HashRouter>
)
