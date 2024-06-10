import styled from 'styled-components';
import postJson from 'post.json';
import { useParams } from 'react-router-dom';
const Comments = () => {
  const { id } = useParams();
  return (
    <CommentsLayout>
      {postJson
        .filter((item) => item.id === parseInt(id))
        .map((item) => {
          return (
            <>
              <CommentsList key={item.id}>
                <CommentsItem>
                  <CommentsImage src={item.avatar} alt="아바타이미지" />
                  <CommnetsNickname>{item.nickname}</CommnetsNickname>
                  <CommnetsTime>23:26</CommnetsTime>
                </CommentsItem>
                <CommnetReply>네 하시는게 좋을 듯 합니다.</CommnetReply>
                <Hr />
              </CommentsList>
            </>
          );
        })}
    </CommentsLayout>
  );
};

export default Comments;

const CommentsLayout = styled.div`
  margin: 0 30px;
`;
const CommentsList = styled.ul``;
const CommentsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const CommentsImage = styled.img`
  border-radius: 10px;
  width: 30px;
  height: 30px;
`;
const CommnetsNickname = styled.div`
  font-size: 18px;
`;
const CommnetsTime = styled.div`
  color: #8b8b8b;
  font-size: 15px;
`;
const CommnetReply = styled.div`
  color: #4a4747;
  padding: 1rem 0;
  font-size: 16px;
`;
const Hr = styled.div`
  border: 1px solid #dfdfdf;
  margin: 1.5rem 0;
`;
