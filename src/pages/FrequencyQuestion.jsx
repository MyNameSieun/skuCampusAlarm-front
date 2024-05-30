import QuestionSearch from 'components/QuestionSearch';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import frequencyQuestion from 'frequencyQuestion.json';
import { useState } from 'react';

const FrequencyQuestion = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState({});
  const toggleShow = (id) => {
    //  prev는 업데이트 이전의 toggles 상태를 나타냄
    setToggle((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <FrequencyLayout>
      <FrequencyBox>
        <FrequencyImage src="images/leftArrow.png" onClick={() => navigate(-1)} />
        <FrequencyText>자주 묻는 질문</FrequencyText>
      </FrequencyBox>
      <QuestionSearch />
      {frequencyQuestion.map((item) => {
        return (
          <FrequencyQuestionList key={item.id}>
            <FrequencyQuestionQ>
              <FrequencyColorBlue>Q</FrequencyColorBlue>
              {item.question}
              <FrequencyArrow src="images/leftArrow.png" onClick={() => toggleShow(item.id)} />
            </FrequencyQuestionQ>
            {toggle[item.id] && (
              <FrequencyQuestionA>
                <FrequencyColorBlue>A</FrequencyColorBlue>
                {item.ans}
              </FrequencyQuestionA>
            )}
          </FrequencyQuestionList>
        );
      })}
    </FrequencyLayout>
  );
};

export default FrequencyQuestion;

const FrequencyLayout = styled.div`
  padding: 0 250px;
`;
const FrequencyBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 32px;
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

const FrequencyQuestionList = styled.ul`
  margin-left: 30px;
  display: flex;
  flex-direction: column;

  color: #464646;
  margin-bottom: 1rem;
`;

const FrequencyQuestionQ = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  width: 100%;
  background-color: #f2f4f6;
  border-radius: 13px;
  font-size: 20px;
`;
const FrequencyColorBlue = styled.div`
  color: #3b64e6;
  font-weight: bold;
  padding: 0 30px;
  font-size: 20px;
`;
const FrequencyArrow = styled.img`
  width: 27px;
  display: flex;
  transform: ${(props) => (props.toggle ? 'rotate(180deg)' : 'rotate(90deg)')};
  position: absolute;
  right: 17rem;
  cursor: pointer;
`;

const FrequencyQuestionA = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 2rem 0;
`;
