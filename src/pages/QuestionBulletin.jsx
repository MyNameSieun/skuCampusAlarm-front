import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuestionBulletin = () => {
  const navigate = useNavigate();

  return (
    <QuestionLayout>
      <QuestionBox>
        <QuestionImage src="images/leftArrow.png" onClick={() => navigate(-1)} />
        <QuestionText>질문 게시판</QuestionText>
      </QuestionBox>
      <QuestionInputBox>
        <QuestionSearchImage src="images/search.png" />
        <QuestionInput placeholder="질문을 검색해보세요!" />
      </QuestionInputBox>
    </QuestionLayout>
  );
};

export default QuestionBulletin;

const QuestionLayout = styled.div``;
const QuestionBox = styled.div``;
const QuestionImage = styled.img``;
const QuestionText = styled.div``;
const QuestionInputBox = styled.div``;
const QuestionSearchImage = styled.img``;
const QuestionInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 18px;
  color: #464646;
  margin-left: 30px;
  &::placeholder {
    color: #999999;
  }
`;
