import styled from 'styled-components';

const Frequencyinfo = () => {
  return (
    <FrequencyinfoLayout>
      <FrequencyinfoH1>자주 찾는 정보</FrequencyinfoH1>

      <FrequencyinfoList>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/school.png" />
          <FrequencyinfoItemText>학교건물</FrequencyinfoItemText>
        </FrequencyinfoItem>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/bus.png" />
          <FrequencyinfoItemText>셔틀버스</FrequencyinfoItemText>
        </FrequencyinfoItem>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/schedule.png" />
          <FrequencyinfoItemText>교시 별 시간</FrequencyinfoItemText>
        </FrequencyinfoItem>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/food-tray.png" />
          <FrequencyinfoItemText>학식 정보</FrequencyinfoItemText>
        </FrequencyinfoItem>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/digital-library.png" />
          <FrequencyinfoItemText>학술정보관 정보</FrequencyinfoItemText>
        </FrequencyinfoItem>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/contact-book.png" />
          <FrequencyinfoItemText>학부/학과 연락처</FrequencyinfoItemText>
        </FrequencyinfoItem>
      </FrequencyinfoList>
      <FrequencyinfoList>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/student-grades.png" />
          <FrequencyinfoItemText>최저이수 학점표</FrequencyinfoItemText>
        </FrequencyinfoItem>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/office.png" />
          <FrequencyinfoItemText>오피스 설치</FrequencyinfoItemText>
        </FrequencyinfoItem>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/quality-control.png" />
          <FrequencyinfoItemText>카피킬러 사용</FrequencyinfoItemText>
        </FrequencyinfoItem>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/wifi.png" />
          <FrequencyinfoItemText>와이파이 연결 </FrequencyinfoItemText>
        </FrequencyinfoItem>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/percentage-graph.png" />
          <FrequencyinfoItemText>학점 비율</FrequencyinfoItemText>
        </FrequencyinfoItem>
        <FrequencyinfoItem>
          <FrequencyinfoItemLogo src="images/scholarship.png" />
          <FrequencyinfoItemText>장학금</FrequencyinfoItemText>
        </FrequencyinfoItem>
      </FrequencyinfoList>
    </FrequencyinfoLayout>
  );
};

const FrequencyinfoLayout = styled.div`
  padding: 60px;
  background-color: #f5f6f8;
`;
const FrequencyinfoH1 = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
  margin: 0 200px;
`;
const FrequencyinfoList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const FrequencyinfoItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  width: 85px;
  height: 85px;
  border: 1px solid #dfdfdf;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  margin: 20px;
  white-space: nowrap;
  &:hover {
    transform: translateY(-5px);
  }
`;
const FrequencyinfoItemLogo = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
`;
const FrequencyinfoItemText = styled.div`
  font-size: 14px;
  color: #333;
  position: absolute;
  top: 100%;
  margin-top: 10px;
`;

export default Frequencyinfo;
