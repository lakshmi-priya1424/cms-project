import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import AppRoutes from './routes/AppRoutes'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthProvider } from './context/Authcontext'
import Introd from './pages/dashboard/Introd'
import { StorageProvider } from '../src/context/StorageContext'

function App() {
  return (
    <>
  <AuthProvider>
    <StorageProvider>
      <AppRoutes/>
      </StorageProvider>
    </AuthProvider> 
    </>
  )
}

export default App
