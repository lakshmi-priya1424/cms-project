import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import AppRoutes from './routes/AppRoutes'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <>
      <AppRoutes/>
    </>
  )
}

export default App
