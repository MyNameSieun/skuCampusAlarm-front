import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import info from 'info.json';

const MoreInfo = () => {
  const navigate = useNavigate();
  return (
    <MoreInfoLayout>
      <MoreInfoH1>더 궁금한 정보가 있으신가요?</MoreInfoH1>
      <MoreInfoList>
        {info.slice(0, 3).map((item) => (
          <Link to={`/info/${item.id}`}>
            <MoreItem onClick={() => navigate('/Info')}>{item.textsub}</MoreItem>
          </Link>
        ))}
      </MoreInfoList>
      <MoreInfoList>
        {info.slice(3, 6).map((item) => (
          <Link to={`/info/${item.id}`}>
            <MoreItem onClick={() => navigate('/Info')}>{item.textsub}</MoreItem>
          </Link>
        ))}
      </MoreInfoList>
    </MoreInfoLayout>
  );
};

const MoreInfoLayout = styled.div``;

const MoreInfoList = styled.div`
  display: flex;
  justify-content: center;
`;
const MoreInfoH1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  padding: 3rem;
`;
const MoreItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  color: #464646;
  border: 10px;
  width: 280px;
  height: 90px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  cursor: pointer;
`;
export default MoreInfo;
