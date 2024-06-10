import styled from 'styled-components';
import { Link } from 'react-router-dom';
import frequencyQ from 'frequencyQuestion.json';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Question = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestion = async () => {
      try {
        const res = await axios.get('http://localhost:8080/posts');
        setQuestions(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getQuestion();
  }, []);

  return (
    <QuestionLayout>
      <QuestionH1>질문 게시판</QuestionH1>

      <QuestionContainer>
        <Link to={'/frequencyQuestion'}>
          <QuestionBox>
            <QuestionList>자주 묻는 질문</QuestionList>
            <Hr />
            {frequencyQ.slice(0, 5).map((item) => (
              <QuestionItem key={item.id}>
                <QuestionBlue type="question">Q</QuestionBlue>
                <span>{item.question}</span>
              </QuestionItem>
            ))}
          </QuestionBox>
        </Link>

        <QuestionBox>
          <Link to={'/'}>
            <QuestionList>최근 올라온 질문</QuestionList>
          </Link>
          <Hr />
          {questions.slice(0, 5).map((item) => (
            <QuestionItem key={item.id}>
              <QuestionBlue type="question">Q</QuestionBlue>
              <Link to={`/questionDetail/${item.id}`}>
                <span>{item.title}</span>
              </Link>
            </QuestionItem>
          ))}
        </QuestionBox>
      </QuestionContainer>
    </QuestionLayout>
  );
};

const QuestionLayout = styled.div`
  height: 530px;
  background-color: #f5f6f8;
`;
const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const QuestionH1 = styled.h1`
  font-size: 26px;
  font-weight: bold;
  padding: 60px;
  margin: 0 200px;
`;
const QuestionBox = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 450px;
  height: 300px;
  border-radius: 40px;
`;
const QuestionList = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding: 30px 0px 10px 30px;
`;
const QuestionItem = styled.span`
  padding: 10px 0px 0px 30px;
  display: flex;
  align-items: center;
  font-size: 15px;
`;
const QuestionBlue = styled.span`
  color: ${(props) => (props.type === 'question' ? '#3b64e6' : '#000')};
  font-size: 24px;
  font-weight: bold;
  margin-right: 10px;
`;

const Hr = styled.hr`
  border: 0;
  width: 90%;
  border-top: 1px solid #dfdfdf;
`;

export default Question;
