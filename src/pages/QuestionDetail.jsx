import { useNavigate, useParams } from 'react-router-dom';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import postJson from 'post.json';
import Comments from 'components/Comments';
import axios from 'axios';

const QuestionDetail = () => {
  const [single, setSingle] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getSingle = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/posts/${id}`);
        setSingle(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getSingle();
  }, [id]);

  console.log(single);

  return (
    <div>
      <span>{single.content}</span>
      <span>{single.author.nickname}</span>
    </div>
    // <QuestionLayout>
    //   <QuestionBox>
    //     <QuestionImage src="/images/leftArrow.png" onClick={() => navigate(-1)} />
    //     <QuestionText>질문 게시판</QuestionText>
    //   </QuestionBox>

    //   {postJson
    //     .filter((item) => item.id === parseInt(id))
    //     .map((item) => {
    //       return (
    //         <QusitonList key={item.id}>
    //           <QustionItem>
    //             <QusitonImage src={item.avatar} alt="아바타이미지" />
    //             <QuestionNickname>{item.nickname}</QuestionNickname>
    //           </QustionItem>
    //           <QuestionTitle>{item.title}</QuestionTitle>
    //           <QuestionContent>{item.content}</QuestionContent>
    //           <QustionBox>
    //             <img src="/images/comment.png" />
    //             <QustionComment>3개</QustionComment>
    //             <QustionTime>{item.time}</QustionTime>
    //           </QustionBox>
    //           <Hr />
    //           <QustionCommentInputLayout>
    //             <QustionCommentInputButton>등록</QustionCommentInputButton>
    //             <QustionCommentInput placeholder="댓글 작성" />
    //             <QustionCommentInputIcon src="/images/search-white.png" alt="search-white" />
    //           </QustionCommentInputLayout>
    //         </QusitonList>
    //       );
    //     })}
    //   <Comments />
    //   <CommentsListButton onClick={() => navigate(-1)}>글 목록</CommentsListButton>
    // </QuestionLayout>
=======
import styled from 'styled-components';
import postJson from 'post.json';
import Comments from 'components/Comments';

const QuestionDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <QuestionLayout>
      <QuestionBox>
        <QuestionImage src="/images/leftArrow.png" onClick={() => navigate(-1)} />
        <QuestionText>질문 게시판</QuestionText>
      </QuestionBox>

      {postJson
        .filter((item) => item.id === parseInt(id))
        .map((item) => {
          return (
            <QusitonList key={item.id}>
              <QustionItem>
                <QusitonImage src={item.avatar} alt="아바타이미지" />
                <QuestionNickname>{item.nickname}</QuestionNickname>
              </QustionItem>
              <QuestionTitle>{item.title}</QuestionTitle>
              <QuestionContent>{item.content}</QuestionContent>
              <QustionBox>
                <img src="/images/comment.png" />
                <QustionComment>3개</QustionComment>
                <QustionTime>{item.time}</QustionTime>
              </QustionBox>
              <Hr />
              <QustionCommentInputLayout>
                <QustionCommentInputButton>등록</QustionCommentInputButton>
                <QustionCommentInput placeholder="댓글 작성" />
                <QustionCommentInputIcon src="/images/search-white.png" alt="search-white" />
              </QustionCommentInputLayout>
            </QusitonList>
          );
        })}
      <Comments />
      <CommentsListButton onClick={() => navigate(-1)}>글 목록</CommentsListButton>
    </QuestionLayout>
>>>>>>> 6576008f5d4b180701fdf7af6ef5d5a5fea2c296
  );
};

export default QuestionDetail;

const QuestionLayout = styled.div`
  padding: 0 250px;
  background-color: white;
  height: 100vh;
`;
const QuestionBox = styled.div`
  display: flex;
  align-items: center;
`;

const QuestionImage = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const QuestionText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-right: 10px;
`;

const QuestionNickname = styled.div`
  font-size: 20px;
`;
const QuestionTitle = styled.div`
  margin-top: 1.4rem;
  font-size: 20px;
  font-weight: bold;
  color: #464646;
`;
const QuestionContent = styled.div`
  margin-top: 1.2rem;
  font-size: 16px;
  color: #4a4747;
`;
const QusitonList = styled.ul`
  margin: 0 30px;
  margin-top: 1.5rem;
`;
const QustionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const QusitonImage = styled.img`
  border-radius: 10px;
  width: 50px;
  height: 50px;
`;
const Hr = styled.hr`
  border: 1px solid #dfdfdf;
`;
const QustionBox = styled.div`
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  color: #8b8b8b;
  img {
    height: 19px;
  }
`;
const QustionTime = styled.div``;

const QustionComment = styled.div`
  margin-right: 1rem;
`;
// 댓글작성 input
const QustionCommentInputLayout = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin: 1rem 0 3rem 0;
  border: 1px solid #5c5c5c;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const QustionCommentInput = styled.input`
  height: 2.4rem;
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  color: #464646;
  margin-left: 20px;
  &::placeholder {
    color: #999999;
  }
`;
const QustionCommentInputIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const QustionCommentInputButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #3b64e6;
  width: 100px;
  height: 100%;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border: 1px solid #5c5c5c;
`;

const CommentsListButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 110px;
  height: 50px;
  margin-left: 30px;
`;
