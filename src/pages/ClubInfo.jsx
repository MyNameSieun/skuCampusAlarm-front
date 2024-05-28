import styled from 'styled-components';

const ClubInfo = () => {
  return (
    <ClubInfoLayout>
      <ClubInfoH2>동아리 인스타 바로가기</ClubInfoH2>
      <ClubInfoH1>
        <ColorBlue>찾고있는 동아리</ColorBlue>가 있으신가요?
      </ClubInfoH1>
      <ClubInfoAssociation>
        <img src="images/동아리연합회.jpg" />
        <span>동아리연합회</span>
      </ClubInfoAssociation>

      {/* 문화 */}
      <ClubInfoListTitle>문화</ClubInfoListTitle>
      <ClubInfoList>
        <ClubInfoItem>C.A.S</ClubInfoItem>
      </ClubInfoList>

      {/* 학술, 봉사 */}
      <ClubInfoListTitle>학술, 봉사</ClubInfoListTitle>
      <ClubInfoList>
        <ClubInfoItem>희망선교회</ClubInfoItem>
        <ClubInfoItem>애드마인</ClubInfoItem>
        <ClubInfoItem>성결대학교 멋쟁이사자처럼</ClubInfoItem>
      </ClubInfoList>

      {/* 예능 */}
      <ClubInfoListTitle>예능</ClubInfoListTitle>
      <ClubInfoList>
        <ClubInfoItem>페가수스</ClubInfoItem>
        <ClubInfoItem>세인트</ClubInfoItem>
        <ClubInfoItem>소리하나</ClubInfoItem>
        <ClubInfoItem>흑심</ClubInfoItem>
        <ClubInfoItem>소너리스</ClubInfoItem>
        <ClubInfoItem>뮤직애</ClubInfoItem>
      </ClubInfoList>

      {/* 체능 */}
      <ClubInfoListTitle>체능</ClubInfoListTitle>
      <ClubInfoList>
        <ClubInfoItem>성결FC</ClubInfoItem>
        <ClubInfoItem>S-COCK</ClubInfoItem>
        <ClubInfoItem>PRESS</ClubInfoItem>
        <ClubInfoItem>더그아웃</ClubInfoItem>
        <ClubInfoItem>하랑</ClubInfoItem>
        <ClubInfoItem>S.T.C</ClubInfoItem>
      </ClubInfoList>

      {/* 기독교 */}
      <ClubInfoListTitle>기독교</ClubInfoListTitle>
      <ClubInfoList>
        <ClubInfoItem>산돌찬양선교단</ClubInfoItem>
        <ClubInfoItem>예수전도단</ClubInfoItem>
        <ClubInfoItem>시와찬미 산양선교단</ClubInfoItem>
        <ClubInfoItem>주사랑음악선교단</ClubInfoItem>
        <ClubInfoItem>마르튀스 선교단</ClubInfoItem>
        <ClubInfoItem>애양선교회</ClubInfoItem>
        <ClubInfoItem>CCC</ClubInfoItem>
      </ClubInfoList>
    </ClubInfoLayout>
  );
};

const ClubInfoLayout = styled.div`
  padding: 60px;
`;

const ClubInfoH1 = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;
const ClubInfoH2 = styled.h2`
  color: #c8c8c8;
  margin-bottom: 8px;
`;
const ColorBlue = styled.span`
  color: #3b64e6;
`;
const ClubInfoAssociation = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: end;
  align-items: end;
  text-align: center;
  img {
    width: 65px;
    height: 65px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: absolute;
    right: 5px;
  }
  span {
    font-size: 14px;
    color: #c8c8c8;
    position: absolute;
    right: -2px;
    top: 14px;
  }
`;
const ClubInfoListTitle = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin-top: 30px;
`;
const ClubInfoList = styled.ul`
  display: flex;
  gap: 6px;
  margin: 10px 0;
`;

const ClubInfoItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 55px;
  border: 2px solid #dfdfdf;
  border-radius: 10px;
  font-weight: bold;
`;

export default ClubInfo;
