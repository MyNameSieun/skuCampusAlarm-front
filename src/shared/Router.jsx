import Home from 'pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Info from 'pages/Info';
import Login from 'pages/Login';
import Singup from 'pages/Singup';
import Navbar from 'components/common/Navbar';
import QuestionBulletin from 'pages/QuestionBulletin';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/QuestionBulletin" element={<QuestionBulletin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
