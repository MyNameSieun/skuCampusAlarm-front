import styled from 'styled-components';

const Question = () => {
  return (
    <QuestionLayout>
      <QuestionH1>질문 게시판</QuestionH1>
    </QuestionLayout>
  );
};

const QuestionLayout = styled.div`
  height: 620px;
  width: 100%;
  background-color: #f5f6f8;
`;
const QuestionH1 = styled.h1`
  font-size: 26px;
  font-weight: bold;
  padding: 60px;
`;

export default Question;
