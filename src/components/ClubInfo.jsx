import styled from 'styled-components';

const ClubInfo = () => {
  const withoutInstargram = (e) => {
    e.preventDefault();
    alert('동아리 인스타가 존재하지 않습니다.');
  };
  return (
    <ClubInfoLayout>
      <ClubInfoH2>동아리 인스타 바로가기</ClubInfoH2>
      <ClubInfoH1>
        <ColorBlue>찾고있는 동아리</ColorBlue>가 있으신가요?
      </ClubInfoH1>
      <a href="https://www.instagram.com/sku_dongari40/" target="_black">
        <ClubInfoAssociation>
          <img src="images/동아리연합회.jpg" />
          <span>동아리연합회</span>
        </ClubInfoAssociation>
      </a>

      {/* 문화 */}
      <ClubInfoListTitle>문화</ClubInfoListTitle>
      <ClubInfoList>
        <a href="https://www.instagram.com/sku_cas/" target="_black">
          <ClubInfoItem>C.A.S</ClubInfoItem>
        </a>
      </ClubInfoList>

      {/* 학술, 봉사 */}
      <ClubInfoListTitle>학술, 봉사</ClubInfoListTitle>
      <ClubInfoList>
        <a href="https://www.instagram.com/vol_hope/" target="_black">
          <ClubInfoItem>희망선교회</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/sku_admain/" target="_black">
          <ClubInfoItem>애드마인</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/likelion_sku/" target="_black">
          <ClubInfoItem>성결대학교 멋쟁이사자처럼</ClubInfoItem>
        </a>
      </ClubInfoList>

      {/* 예능 */}
      <ClubInfoListTitle>예능</ClubInfoListTitle>
      <ClubInfoList>
        <a href="https://www.instagram.com/sku.pegasuss/" target="_black">
          <ClubInfoItem>페가수스</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/saint__00/" target="_black">
          <ClubInfoItem>세인트</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/sound_1_sorihana/" target="_black">
          <ClubInfoItem>소리하나</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/blackmind_hs/" target="_black">
          <ClubInfoItem>흑심</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/sonorous_.vocal/" target="_black">
          <ClubInfoItem>소너리스</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/music_.__._ae/" target="_black">
          <ClubInfoItem>뮤직애</ClubInfoItem>
        </a>
      </ClubInfoList>

      {/* 체능 */}
      <ClubInfoListTitle>체능</ClubInfoListTitle>
      <ClubInfoList>
        <a href="https://www.instagram.com/sku.fc/" target="_black">
          <ClubInfoItem>성결FC</ClubInfoItem>
        </a>
        {/* S-COCK 인스타 x */}
        <a href="">
          <ClubInfoItem onClick={withoutInstargram}>S-COCK</ClubInfoItem>
        </a>
        {/* PRESS 인스타 x */}
        <a href="">
          <ClubInfoItem onClick={withoutInstargram}>PRESS</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/sku.dugout_2019/" target="_black">
          <ClubInfoItem>더그아웃</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/harang_volleyball/" target="_black">
          <ClubInfoItem>하랑</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/sku_taekwondo_club/" target="_black">
          <ClubInfoItem>S.T.C</ClubInfoItem>
        </a>
      </ClubInfoList>

      {/* 기독교 */}
      <ClubInfoListTitle>기독교</ClubInfoListTitle>
      <ClubInfoList>
        <a href="https://www.instagram.com/sku_livingstone/" target="_black">
          <ClubInfoItem>산돌찬양선교단</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/sku_ywam/" target="_black">
          <ClubInfoItem>예수전도단</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/psalms.and.hymn/" target="_black">
          <ClubInfoItem>시와찬미 산양선교단</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/jusarang_1988/" target="_black">
          <ClubInfoItem>주사랑음악선교단</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/martus_mission/" target="_black">
          <ClubInfoItem>마르튀스 선교단</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/aeyang_ministry/" target="_black">
          <ClubInfoItem>애양선교회</ClubInfoItem>
        </a>
        <a href="https://www.instagram.com/skuccc_/" target="_black">
          <ClubInfoItem>CCC</ClubInfoItem>
        </a>
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
