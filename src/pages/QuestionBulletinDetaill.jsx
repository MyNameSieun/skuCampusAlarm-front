import { Outlet } from 'react-router-dom';

const QuestionBulletinDetaill = () => {
  return (
    <div>
      <div>
        <h2>여기는 About 페이지입니다.</h2>
        <p>대충 쇼핑몰 페이지라는 뜻</p>
      </div>
      <Outlet />
    </div>
  );
};

export default QuestionBulletinDetaill;
