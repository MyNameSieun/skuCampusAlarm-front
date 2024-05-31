import Home from 'pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Info from 'pages/Info';
import Login from 'pages/Login';
import Navbar from 'components/common/Navbar';
import QuestionBulletin from 'pages/QuestionBulletin';
import FrequencyQuestion from 'pages/FrequencyQuestion';
import QuestionBulletinDetaill from 'pages/QuestionBulletinDetaill';
import Register from 'pages/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/questionBulletin" element={<QuestionBulletin />} />
        <Route path="/frequencyQuestion" element={<FrequencyQuestion />} />
        <Route path="/questionbulletindetaill" element={<QuestionBulletinDetaill />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
