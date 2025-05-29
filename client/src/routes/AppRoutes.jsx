import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import NotFound from '../pages/NotFound'
import BasicLayout from '../layouts/BasicLayout'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<BasicLayout/>}>
        <Route index element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<NotFound/>} />
        </Route>
    </Routes>
  )
}