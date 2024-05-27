import styled from 'styled-components';

const ClubInfo = () => {
  return (
    <ClubInfoLayout>
      <ClubInfoH2>동아리 인스타 바로가기</ClubInfoH2>
      <ClubInfoH1>찾고있는 동아리가 있으신가요?</ClubInfoH1>
    </ClubInfoLayout>
  );
};

const ClubInfoLayout = styled.div`
  height: 620px;
  width: 100%;
  padding: 60px;
`;

const ClubInfoH1 = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;
const ClubInfoH2 = styled.h2`
  color: #c8c8c8;
`;
export default ClubInfo;
