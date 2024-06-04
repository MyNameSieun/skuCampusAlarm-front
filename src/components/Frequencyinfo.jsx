import { Link } from 'react-router-dom';
import styled from 'styled-components';
import frequencyinfo from 'frequencyinfo.json';

const Frequencyinfo = () => {
  return (
    <FrequencyinfoLayout>
      <FrequencyinfoH1>자주 찾는 정보</FrequencyinfoH1>

      <FrequencyinfoList>
        {frequencyinfo.slice(0, 6).map((item) => (
          <Link to={`/frequencyinfodetail/${item.id}`}>
            <FrequencyinfoItem key={item.id}>
              <FrequencyinfoItemLogo src={item.logo} alt={item.text} />
              <FrequencyinfoItemText>{item.text}</FrequencyinfoItemText>
            </FrequencyinfoItem>
          </Link>
        ))}
      </FrequencyinfoList>
      <FrequencyinfoList>
        {frequencyinfo.slice(6, 12).map((item) => (
         <Link to={`/frequencyinfodetail/${item.id}`}>
            <FrequencyinfoItem key={item.id}>
              <FrequencyinfoItemLogo src={item.logo} alt={item.text} />
              <FrequencyinfoItemText>{item.text}</FrequencyinfoItemText>
            </FrequencyinfoItem>
          </Link>
        ))}
      </FrequencyinfoList>
    </FrequencyinfoLayout>
  );
};

export default Frequencyinfo;

const FrequencyinfoLayout = styled.div`
  padding: 60px;
  background-color: #f5f6f8;
`;
const FrequencyinfoH1 = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
  margin: 0 200px;
  margin-bottom: 30px;
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
