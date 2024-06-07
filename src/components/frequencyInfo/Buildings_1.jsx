import styled from 'styled-components';

const Buildings_1 = () => {
  return (
    <BuildingsLayout>
      <BuildingsList>
        <BuildingsItem>재림관</BuildingsItem>
        <BuildingsItem>학술정보관</BuildingsItem>
        <BuildingsItem>기념관</BuildingsItem>
        <BuildingsItem>중생관</BuildingsItem>
        <BuildingsItem>영암관</BuildingsItem>
        <BuildingsItem>학생회관</BuildingsItem>
        <BuildingsItem>성결관</BuildingsItem>
        <BuildingsItem>신유관</BuildingsItem>
        <BuildingsItem>유치원</BuildingsItem>
      </BuildingsList>
    </BuildingsLayout>
  );
};

export default Buildings_1;

const BuildingsLayout = styled.div``;
const BuildingsList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const BuildingsItem = styled.li`
  width: 8rem;
  height: 2rem;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  padding: 1rem;
  font-size: 20px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
`;
