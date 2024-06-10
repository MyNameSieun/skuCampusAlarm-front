import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import frequencyinfo from 'frequencyinfo.json';
import Buildings_1 from 'components/frequencyInfo/Buildings_1';
import Shuttle_2 from 'components/frequencyInfo/Shuttle_2';
import ClassTimes_3 from 'components/frequencyInfo/ClassTimes_3';
import MealInfo_4 from 'components/frequencyInfo/MealInfo_4';
import Library_5 from 'components/frequencyInfo/Library_5';
import Contacts_6 from 'components/frequencyInfo/Contacts_6';
import Credits_7 from 'components/frequencyInfo/Credits_7';
import OfficeSetup_8 from 'components/frequencyInfo/OfficeSetup_8';
import CopyKiller_9 from 'components/frequencyInfo/CopyKiller_9';
import WiFi_10 from 'components/frequencyInfo/WiFi_10';
import Grades_11 from 'components/frequencyInfo/Grades_11';
import Scholarships_12 from 'components/frequencyInfo/Scholarships_12';

const FrequencyinfoDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <FrequencyDetailLayout>
      <TextContent>
        {frequencyinfo
          .filter((item) => item.id === parseInt(id))
          .map((item) => {
            return (
              <div key={item.id}>
                <FrequencyDetailLayoutBox>
                  <FrequencyDetailLayoutImage src="/images/leftArrow.png" onClick={() => navigate(-1)} />
                  <FrequencyDetailLayoutText>자주 찾는 정보 /</FrequencyDetailLayoutText>
                  <FrequencyDetailLayoutTextSub>{item.text}</FrequencyDetailLayoutTextSub>
                </FrequencyDetailLayoutBox>
                <FrequencyDetailLayoutContent>
                  {parseInt(id) === 1 && <Buildings_1 />}
                  {parseInt(id) === 2 && <Shuttle_2 />}
                  {parseInt(id) === 3 && <ClassTimes_3 />}
                  {parseInt(id) === 4 && <MealInfo_4 />}
                  {parseInt(id) === 5 && <Library_5 />}
                  {parseInt(id) === 6 && <Contacts_6 />}
                  {parseInt(id) === 7 && <Credits_7 />}
                  {parseInt(id) === 8 && <OfficeSetup_8 />}
                  {parseInt(id) === 9 && <CopyKiller_9 />}
                  {parseInt(id) === 10 && <WiFi_10 />}
                  {parseInt(id) === 11 && <Grades_11 />}
                  {parseInt(id) === 12 && <Scholarships_12 />}
                </FrequencyDetailLayoutContent>
                <FrequencyDetailLayoutLink>
                  <a href={item.infoLink} target="_blank">
                    {item.infoLinkText}
                  </a>
                </FrequencyDetailLayoutLink>
              </div>
            );
          })}
      </TextContent>
    </FrequencyDetailLayout>
  );
};

export default FrequencyinfoDetail;

const FrequencyDetailLayout = styled.div`
  padding: 0 250px;
  background-color: white;
`;
const TextContent = styled.div`
  font-size: 20px;
  margin: 50px 0 0 50px;
  line-height: 30px;
  color: #464646;
`;
const FrequencyDetailLayoutBox = styled.div`
  display: flex;
  align-items: center;
`;

const FrequencyDetailLayoutImage = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const FrequencyDetailLayoutText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-right: 10px;
  color: black;
`;
const FrequencyDetailLayoutTextSub = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
const FrequencyDetailLayoutLink = styled.div`
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
const FrequencyDetailLayoutContent = styled.div`
  font-size: 20px;
  margin: 50px 0 0 50px;
  line-height: 30px;
  color: #464646;
`;
