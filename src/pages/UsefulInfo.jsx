import styled from 'styled-components';

const UsefulInfo = () => {
  return (
    <UsefulInfoLayout>
      <UsefulInfoH1>유용한정보</UsefulInfoH1>
    </UsefulInfoLayout>
  );
};
const UsefulInfoLayout = styled.div`
  height: 620px;
  width: 100%;
`;

const UsefulInfoH1 = styled.h1`
  font-size: 26px;
  font-weight: bold;
  padding: 60px;
`;

export default UsefulInfo;
