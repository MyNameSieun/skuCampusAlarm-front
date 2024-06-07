import styled from 'styled-components';
import usefulInfo from 'usefulInfo.json';

// 추천 어플(id=4)
const Apps = () => {
  return (
    <AppsLayout>
      {usefulInfo.app.map((app) => (
        <AppCard key={app.id}>
          <AppTitle>{app.title}</AppTitle>
          <AppDescription>{app.description}</AppDescription>
        </AppCard>
      ))}
    </AppsLayout>
  );
};

export default Apps;

const AppsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const AppCard = styled.div`
  width: 100%;

  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
`;

const AppTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0;
`;

const AppDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;
