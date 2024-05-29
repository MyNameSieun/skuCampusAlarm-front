import Home from 'pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Info from 'pages/Info';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Navbar from 'components/common/Navbar';
import QuestionBulletin from 'pages/QuestionBulletin';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/QuestionBulletin" element={<QuestionBulletin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
