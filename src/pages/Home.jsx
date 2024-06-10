import styled from 'styled-components';
import LinkClick from 'components/LinkClick';
import SwiperImage from 'components/SwiperImage';
// import Search from 'components/Search';
import Frequencyinfo from 'components/Frequencyinfo';
import UsefulInfo from 'components/UsefulInfo';
import Question from 'components/Question';
import ClubInfo from 'components/ClubInfo';

const Home = () => {
  return (
    <HomeLayout>
      <LinkClickRow>
        <SwiperImage />
        <LinkClick />
      </LinkClickRow>
      {/* <Search /> */}
      <Frequencyinfo />
      <UsefulInfo />
      <Question />
      <ClubInfo />
    </HomeLayout>
  );
};
const HomeLayout = styled.div`
  background-color: white;
`;
const LinkClickRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 2rem;
`;

export default Home;
