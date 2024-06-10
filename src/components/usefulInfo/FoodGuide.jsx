import foodGuide from 'foodGuide.json';
import { useState } from 'react';
import styled from 'styled-components';

const FoodGuide = () => {
  const [toggle, setToggle] = useState({});

  const toggleShow = (id) => {
    setToggle((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <FoodGuideLayout>
      {foodGuide.map((item) => {
        return (
          <FoodGuideBox key={item.id}>
            <FoodGuidList>
              <FoodGuideMenu>{item.menu}</FoodGuideMenu>
              <FoodGuideArrow
                src="/images/leftArrow.png"
                onClick={() => toggleShow(item.id)}
                toggle={toggle[item.id]}
              />
            </FoodGuidList>
            {toggle[item.id] && (
              <FoodGuidItem>
                <FoodGuideContent>{item.content}</FoodGuideContent>
                <FoodGuideHoliday>{item.holiday}</FoodGuideHoliday>
                <FoodGuideBreakTime>{item.breakTime}</FoodGuideBreakTime>
                <FoodGuidePlace>
                  <a href={item.place} target="_blank" rel="noopener noreferrer">
                    바로가기 ↗️
                  </a>
                </FoodGuidePlace>
              </FoodGuidItem>
            )}
          </FoodGuideBox>
        );
      })}
    </FoodGuideLayout>
  );
};

export default FoodGuide;

const FoodGuideLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9fafb;
`;

const FoodGuideArrow = styled.img`
  width: 30px;
  cursor: pointer;
  transform: ${({ toggle }) => (toggle ? 'rotate(270deg)' : 'rotate(90deg)')};
  transition: transform 0.2s;
`;

const FoodGuideBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FoodGuidList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
`;

const FoodGuidItem = styled.div`
  padding: 15px 20px;
  background-color: #fff;
`;

const FoodGuideMenu = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

const FoodGuideContent = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #666;
`;

const FoodGuideHoliday = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #999;
`;

const FoodGuideBreakTime = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #999;
`;

const FoodGuidePlace = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: #007bff;

  a {
    text-decoration: none;
    color: inherit;
    color: #007bff;
    &:hover {
      text-decoration: underline;
      color: #007bff;
    }
  }
`;
