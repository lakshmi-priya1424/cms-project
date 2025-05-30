import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import NotFound from '../pages/NotFound'
import BasicLayout from '../layouts/BasicLayout'
import AddItem from '../pages/cms/AddItem'
import About from '../pages/dashboard/About'


export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<BasicLayout/>}>
        <Route index element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/additem" element={<AddItem/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
        </Route>
    </Routes>
  )
}