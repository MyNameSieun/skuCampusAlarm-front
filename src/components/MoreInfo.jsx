import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const MoreInfo = () => {
  const navigate = useNavigate();
  return (
    <MoreInfoLayout>
      <MoreInfoH1>더 궁금한 정보가 있으신가요?</MoreInfoH1>
      <MoreInfoList>
        <MoreItem onClick={() => navigate('/Info')}>졸업학점 계산기</MoreItem>
        <MoreItem>학교 근처 맛집</MoreItem>
        <MoreItem>추천 어플</MoreItem>
      </MoreInfoList>
      <MoreInfoList>
        <MoreItem>영커 교재 사용법</MoreItem>
        <MoreItem>소프트웨어 대여</MoreItem>
        <MoreItem>수강신청 팁</MoreItem>
      </MoreInfoList>
    </MoreInfoLayout>
  );
};

const MoreInfoLayout = styled.div``;

const MoreInfoList = styled.div`
  display: flex;
  justify-content: center;
`;
const MoreInfoH1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  padding: 3rem;
`;
const MoreItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  color: #464646;
  border: 10px;
  width: 280px;
  height: 90px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  cursor: pointer;
`;
export default MoreInfo;
