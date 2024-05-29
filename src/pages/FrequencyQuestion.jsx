import QuestionSearch from 'components/QuestionSearch';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FrequencyQuestion = () => {
  const navigate = useNavigate();

  return (
    <FrequencyLayout>
      <FrequencyBox>
        <FrequencyImage src="images/leftArrow.png" onClick={() => navigate(-1)} />
        <FrequencyText>자주 묻는 질문</FrequencyText>
      </FrequencyBox>
      <QuestionSearch />
    </FrequencyLayout>
  );
};

export default FrequencyQuestion;

const FrequencyLayout = styled.div`
  font-weight: bold;
  font-size: 32px;
  padding: 0 250px;
`;
const FrequencyBox = styled.div`
  display: flex;
  align-items: center;
`;

const FrequencyImage = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const FrequencyText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-right: 10px;
`;
