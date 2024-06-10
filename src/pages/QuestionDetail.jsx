import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext';
import Comments from 'components/Comments';
import axios from 'axios';

const QuestionDetail = () => {
  const [single, setSingle] = useState({});
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

  // 삭제
  const handleDelete = async () => {
    const boredDelete = window.confirm('게시물을 삭제하시겠습니까?');
    if (!boredDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:8080/posts/${id}`, {
        withCredentials: true
      });
      alert('게시글이 삭제되었습니다.');
      navigate('/questionBulletin');
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  return (
    <QuestionLayout>
      <QuestionBox>
        <QuestionImage src="/images/leftArrow.png" onClick={() => navigate(-1)} />
        <QuestionText>질문 게시판</QuestionText>
      </QuestionBox>

      <QusitonList key={single.id}>
        <QustionItem></QustionItem>
        <QuestionTitle>{single.title}</QuestionTitle>

        <QuestionContent dangerouslySetInnerHTML={{ __html: single.content }} />

        {AuthContext && AuthContext.id === single.authorId && (
          <QustionButtonBox>
            <QustionButton>수정</QustionButton>
            <QustionButton onClick={handleDelete}>삭제</QustionButton>
          </QustionButtonBox>
        )}

        <QustionBox>
          <img src="/images/comment.png" />
          <QustionComment>{single.comments ? single.comments.length : 0}</QustionComment>
          <QustionTime>{single.time}</QustionTime>
          <div>{single.createdAt?.replace('T', ' ')}</div>
          <QuestionNickname>{single.author ? single.author.nickname : 0}</QuestionNickname>
        </QustionBox>
        <Hr />
      </QusitonList>

      <Comments />
      <CommentsListButton onClick={() => navigate(-1)}>글 목록</CommentsListButton>
    </QuestionLayout>
  );
};

export default QuestionDetail;

const QuestionLayout = styled.div`
  padding: 0 250px;
  background-color: white;
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
  margin-left: 10px;
`;
const QuestionTitle = styled.div`
  margin: 1.4rem 0 3rem 0;

  font-size: 2rem;
  font-weight: bold;
  color: #464646;
`;
const QuestionContent = styled.div`
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

const Hr = styled.hr`
  border: 1px solid #dfdfdf;
`;
const QustionBox = styled.div`
  margin-top: -1rem;
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

const QustionButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  color: white;
  border-radius: 7px;
  gap: 1rem;
  margin-top: 4rem;
`;
const QustionButton = styled.div`
  cursor: pointer;
  background-color: #3b64e6;
  padding: 1rem 2rem;
  border-radius: 12px;
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
  margin: 2rem 0 0 30px;
`;
