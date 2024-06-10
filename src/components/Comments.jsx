import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  const [single, setSingle] = useState('');
  const [comment, setComment] = useState('');
  const [commentUpdateId, setCommentUpdateId] = useState(null);
  const [commentUpdateValue, setCommentUpdateValue] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const handleCommentSubmit = async () => {
    try {
      await axios.post(`http://localhost:8080/posts/${id}/comment`, { content: comment }, { withCredentials: true });
      setComment('');
      const res = await axios.get(`http://localhost:8080/posts/${id}`);
      setSingle(res.data);
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  // 삭제
  const handleCommentDelete = async (commentId) => {
    try {
      await axios.delete(`http://localhost:8080/posts/${id}/comment/${commentId}`, {
        withCredentials: true
      });
      const res = await axios.get(`http://localhost:8080/posts/${id}`);
      setSingle(res.data);
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  // 수정
  const handleCommentUpdate = async (commentId) => {
    try {
      await axios.put(
        `http://localhost:8080/posts/${id}/comment/${commentId}`,
        { content: commentUpdateValue },
        { withCredentials: true }
      );
      setCommentUpdateValue('');
      setCommentUpdateId(null);
      const res = await axios.get(`http://localhost:8080/posts/${id}`);
      setSingle(res.data);
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  const handleEditClick = (commentId, content) => {
    setCommentUpdateId(commentId);
    setCommentUpdateValue(content);
  };

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <CommentsLayout>
      <Container>
        <CommentContainer>
          <InputContainer>
            <TextArea placeholder="댓글" value={comment} onChange={(e) => setComment(e.target.value)} />
            <Button onClick={handleCommentSubmit}>등록</Button>
          </InputContainer>
          {single.comments?.map((item) => (
            <Comment key={item.id}>
              <CommentHeader>
                <CommentAuthor>{item.author.nickname}</CommentAuthor>
                <CommentDate>{formatDate(item.createdAt)}</CommentDate>
              </CommentHeader>
              {commentUpdateId === item.id ? (
                <CommentUpdateBox>
                  <CommenTextArea
                    placeholder="댓글 수정"
                    value={commentUpdateValue}
                    onChange={(e) => setCommentUpdateValue(e.target.value)}
                  />
                  <CommentButtonBox>
                    <Button onClick={() => handleCommentUpdate(item.id)}>저장</Button>
                    <Button onClick={() => setCommentUpdateId(null)}>취소</Button>
                  </CommentButtonBox>
                </CommentUpdateBox>
              ) : (
                <Content>{item.content}</Content>
              )}
              {commentUpdateId !== item.id && (
                <ButtonBox>
                  <Button onClick={() => handleEditClick(item.id, item.content)}>수정</Button>
                  <Button onClick={() => handleCommentDelete(item.id)}>삭제</Button>
                </ButtonBox>
              )}
            </Comment>
          ))}
        </CommentContainer>
      </Container>
    </CommentsLayout>
  );
};

export default Comments;

const CommentsLayout = styled.div`
  margin: 0 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CommentContainer = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentAuthor = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const CommentDate = styled.span`
  color: #8b8b8b;
  font-size: 14px;
`;

const Content = styled.span`
  white-space: pre-line;
  font-size: 16px;
`;

const CommentUpdateBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CommentButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CommenTextArea = styled.textarea`
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  font-size: 16px;
`;
