import styled from 'styled-components';

const Question = () => {
  return (
    <QuestionLayout>
      <QuestionH1>질문 게시판</QuestionH1>
      <QuestionBox>
        <QuestionList>자주 묻는 질문</QuestionList>
        <Hr />
        <div>
          <span>Q</span>
          <QuestionItem>사이버캠퍼스? LMS? 코스모스가 뭔가요?</QuestionItem>
        </div>
      </QuestionBox>
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
const QuestionBox = styled.div`
  background-color: white;
  width: 450px;
  height: 300px;
  border-radius: 40px;
`;
const QuestionList = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding: 30px 0px 0px 30px;
`;
const QuestionItem = styled.span``;

const Hr = styled.hr``;

export default Question;
