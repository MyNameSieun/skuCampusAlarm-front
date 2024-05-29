import Home from 'pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Info from 'pages/Info';
import Login from 'pages/Login';
import Singup from 'pages/Singup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
