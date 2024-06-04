import Home from 'pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Info from 'pages/Info';
import Login from 'pages/Login';
import Navbar from 'components/common/Navbar';
import QuestionBulletin from 'pages/QuestionBulletin';
import FrequencyQuestion from 'pages/FrequencyQuestion';
import Register from 'pages/Register';
import QuestionDetail from 'pages/QuestionDetail';
import Write from 'pages/Write';
import FrequencyinfoDetail from 'pages/FrequencyinfoDetail';

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
        <Route path="/questionDetail/:id" element={<QuestionDetail />} />
        <Route path="/frequencyQuestion" element={<FrequencyQuestion />} />
        <Route path="/frequencyinfodetail/:id" element={<FrequencyinfoDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
