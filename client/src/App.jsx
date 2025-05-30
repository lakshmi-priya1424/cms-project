import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import AppRoutes from './routes/AppRoutes'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthProvider } from './context/Authcontext'

function App() {
  return (
    <>
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
    </>
  )
}

export default App
