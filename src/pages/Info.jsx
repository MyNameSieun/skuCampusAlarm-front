import Navbar from 'components/common/Navbar';
import styled from 'styled-components';

const Info = () => {
  return (
    <InfoLayout>
      <Navbar />
    </InfoLayout>
  );
};

export default Info;

const InfoLayout = styled.div`
  padding: 0 250px;
`;
