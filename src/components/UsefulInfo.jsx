import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import info from 'info.json';

const UsefulInfo = () => {
  const navigate = useNavigate();
  return (
    <UsefulInfoLayout>
      <UsefulInfoH1>유용한정보</UsefulInfoH1>

      <UsefulInfoLayoutList>
        <UsefulInfoLayoutItem onClick={() => navigate('/info')}>
          <Link to={`/info/${info.id}`}>
            <UsefulInfoItemText>졸업학점 계산기</UsefulInfoItemText>
            <UsefulInfoItemLogo src="images/3d-calculator.png" />
          </Link>
        </UsefulInfoLayoutItem>
        <UsefulInfoLayoutItem>
          <Link to={`/info/${info.id}`}>
            <UsefulInfoItemText>학교 근처 맛집</UsefulInfoItemText>
            <UsefulInfoItemLogo src="images/udon.png" />
          </Link>
        </UsefulInfoLayoutItem>
        <UsefulInfoLayoutItem>
          <Link to={`/info/${info.id}`}>
            <UsefulInfoItemText>수강신청 팁</UsefulInfoItemText>
            <UsefulInfoItemLogo src="images/idea.png" />
          </Link>
        </UsefulInfoLayoutItem>
      </UsefulInfoLayoutList>
      <UsefulInfoLayoutList>
        <UsefulInfoLayoutItem>
          <Link to={`/info/${info.id}`}>
            <UsefulInfoItemText>추천 어플</UsefulInfoItemText>
            <UsefulInfoItemLogo src="images/development.png" />
          </Link>
        </UsefulInfoLayoutItem>
        <UsefulInfoLayoutItem>
          <Link to={`/info/${info.id}`}>
            <UsefulInfoItemText>영커 교재 사용법</UsefulInfoItemText>
            <UsefulInfoItemLogo src="images/book.png" />
          </Link>
        </UsefulInfoLayoutItem>
        <UsefulInfoLayoutItem>
          <Link to={`/info/${info.id}`}>
            <UsefulInfoItemText>논문 보는법</UsefulInfoItemText>
            <UsefulInfoItemLogo src="images/dissertation.png" />
          </Link>
        </UsefulInfoLayoutItem>
      </UsefulInfoLayoutList>
    </UsefulInfoLayout>
  );
};
const UsefulInfoLayout = styled.div`
  padding: 60px;
`;

const UsefulInfoH1 = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin: 0 200px;
`;
const UsefulInfoLayoutList = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 3rem;
`;
const UsefulInfoLayoutItem = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 25px;
  height: 165px;
  width: 275px;
  font-size: 20px;
  font-weight: bold;
  padding: 30px 0 0 30px;
  position: relative;
  cursor: pointer;
`;
const UsefulInfoItemLogo = styled.img`
  object-fit: contain;
  width: 50%;
  height: 50%;
  position: absolute;
  right: 40px;
  bottom: 25px;
`;
const UsefulInfoItemText = styled.div``;

export default UsefulInfo;
