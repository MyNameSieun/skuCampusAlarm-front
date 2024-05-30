import styled from 'styled-components';

const QuestionSearch = () => {
  return (
    <QuestionSearchLayout>
      <QuestionSearchInputBox>
        <QuestionSearchSearchImage src="images/search.png" />
        <QuestionSearchInput placeholder="질문을 검색해보세요!" />
      </QuestionSearchInputBox>
    </QuestionSearchLayout>
  );
};

export default QuestionSearch;

const QuestionSearchLayout = styled.div`
  font-weight: bold;
  font-size: 32px;
`;
const QuestionSearchInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const QuestionSearchInput = styled.input`
  margin-top: 30px;
  position: relative;
  outline: none;
  font-size: 18px;
  color: #464646;
  height: 70px;
  margin-left: 30px;
  margin-bottom: 2rem;
  padding-left: 5rem;
  border-radius: 8px;
  &::placeholder {
    color: #999999;
  }
`;
const QuestionSearchSearchImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 28px;
  height: 28px;
  cursor: pointer;
  z-index: 1;
  left: 19rem;
  top: 14rem;
`;
