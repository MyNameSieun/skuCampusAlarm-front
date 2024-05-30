import Home from 'pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Info from 'pages/Info';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Navbar from 'components/common/Navbar';
import QuestionBulletin from 'pages/QuestionBulletin';
import FrequencyQuestion from 'pages/FrequencyQuestion';
import QuestionBulletinDetaill from 'pages/QuestionBulletinDetaill';

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
        <Route path="/questionBulletin" element={<QuestionBulletin />} />
        <Route path="/frequencyQuestion" element={<FrequencyQuestion />} />
        <Route path="/questionbulletindetaill" element={<QuestionBulletinDetaill />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
