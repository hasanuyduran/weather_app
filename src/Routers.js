import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Users from './Users';
import Test from './Test';
import Hava from './Hava';

const Routers = () => {
  return (
    <Routes>  {/* Sadece yönlendirmeleri burada tanımlayın */}
      <Route path="/" element={<Hava />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/test" element={<Test />} />
      <Route path="/hava" element={<Hava />} />
    </Routes>
  );
}

export default Routers;
