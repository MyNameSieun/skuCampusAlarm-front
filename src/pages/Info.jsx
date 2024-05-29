import MoreInfo from 'components/MoreInfo';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import info from 'info.json';

const Info = () => {
  const navigate = useNavigate();

  return (
    <InfoLayout>
      <InfoBox>
        <InfoImage src="images/leftArrow.png" onClick={() => navigate(-1)} />
        <InfoText>유용한 정보 /</InfoText>
      </InfoBox>
      <TextContent>
        {info.map((item) => {
          return (
            <div key={item.id}>
              <InfoTextSub>{item.textsub}</InfoTextSub>
              <TextContent>{item.textContent}</TextContent>
            </div>
          );
        })}

        <InfoLink>
          <a href="https://gcc.sku-sku.com/" target="_blank">
            [ 졸업학점 계산기 사용하기↗️ ]
          </a>
        </InfoLink>
      </TextContent>
      <Hr />
      <MoreInfo />
    </InfoLayout>
  );
};

export default Info;

const InfoLayout = styled.div`
  padding: 0 250px;
  height: 110vh;
  background-color: white;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
`;
const InfoImage = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const InfoText = styled.span`
  font-size: 32px;
  font-weight: bold;
  margin-right: 10px;
`;
const InfoTextSub = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const TextContent = styled.div`
  font-size: 20px;
  margin: 50px 0 0 50px;
  line-height: 30px;
  color: #464646;
`;
const InfoLink = styled.div`
  margin-top: 60px;
  color: #3b64e6;

  a:link {
    color: #3b64e6;
  }
  a:visited {
    color: #3b64e6;
  }
  text-decoration: underline;
`;
const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #dfdfdf;
  margin-top: 100px;
`;
