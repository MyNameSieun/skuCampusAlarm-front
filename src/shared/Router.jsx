import Home from 'pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Info from 'pages/Info';
import Login from 'pages/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
