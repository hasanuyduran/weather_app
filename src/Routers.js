import React from 'react'
import App from './App'
import Login from './Login'
import Users from './Users'
import Test from './Test'
import Hava from './Hava'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/test" element={<Test />} />
        <Route path="/hava" element={<Hava />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routers
