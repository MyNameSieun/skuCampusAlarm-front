import MoreInfo from 'components/MoreInfo';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import info from 'info.json';

const Info = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <InfoLayout>
      <TextContent>
        {info
          .filter((item) => item.id === parseInt(id))
          .map((item) => {
            return (
              <div key={item.id}>
                <InfoBox>
                  <InfoImage src="/images/leftArrow.png" onClick={() => navigate(-1)} />
                  <InfoText>유용한 정보 /</InfoText>
                  <InfoTextSub>{item.textsub}</InfoTextSub>
                </InfoBox>
                <TextContent>{item.textContent}</TextContent>
                <InfoLink>
                  <a href={item.infoLink} target="_blank">
                    [ {item.infoTitle}↗️ ]
                  </a>
                </InfoLink>
              </div>
            );
          })}
      </TextContent>
      <Hr />
      <MoreInfo />
    </InfoLayout>
  );
};

export default Info;

const InfoLayout = styled.div`
  padding: 0 250px;
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
  color: black;
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
