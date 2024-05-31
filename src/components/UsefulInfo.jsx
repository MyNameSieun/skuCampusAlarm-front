import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import info from 'info.json';

const UsefulInfo = () => {
  const navigate = useNavigate();

  return (
    <UsefulInfoLayout>
      <UsefulInfoH1>유용한정보</UsefulInfoH1>

      <UsefulInfoLayoutList>
        {info.slice(0, 3).map((item) => (
          <Link to={`/info/${item.id}`}>
            <UsefulInfoLayoutItem key={item.id}>
              <UsefulInfoItemText>{item.textsub}</UsefulInfoItemText>
              <UsefulInfoItemLogo src={item.infoImage} alt={item.textsub} />
            </UsefulInfoLayoutItem>
          </Link>
        ))}
      </UsefulInfoLayoutList>
      <UsefulInfoLayoutList>
        {info.slice(3, 6).map((item) => (
          <Link to={`/info/${item.id}`}>
            <UsefulInfoLayoutItem key={item.id}>
              <UsefulInfoItemText>{item.textsub}</UsefulInfoItemText>
              <UsefulInfoItemLogo src={item.infoImage} alt={item.textsub} />
            </UsefulInfoLayoutItem>
          </Link>
        ))}
      </UsefulInfoLayoutList>
    </UsefulInfoLayout>
  );
};
const UsefulInfoLayout = styled.div`
  padding: 60px;
`;

const UsefulInfoH1 = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin: 0 200px;
`;
const UsefulInfoLayoutList = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 3rem;
`;
const UsefulInfoLayoutItem = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 25px;
  height: 165px;
  width: 275px;
  font-size: 20px;
  font-weight: bold;
  padding: 30px 0 0 30px;
  position: relative;
  cursor: pointer;
`;
const UsefulInfoItemLogo = styled.img`
  object-fit: contain;
  width: 50%;
  height: 50%;
  position: absolute;
  right: 40px;
  bottom: 25px;
`;
const UsefulInfoItemText = styled.div``;

export default UsefulInfo;
