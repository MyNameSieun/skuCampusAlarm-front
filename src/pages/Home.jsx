import styled from 'styled-components';
import LinkClick from 'components/LinkClick';
import SwiperImage from 'components/SwiperImage';
import Navbar from 'components/common/Navbar';
import Search from 'components/Search';
import Frequencyinfo from './Frequencyinfo';
import UsefulInfo from './UsefulInfo';
import Question from 'components/Question';
import ClubInfo from './ClubInfo';
import Footer from 'components/common/Footer';

const Home = () => {
  return (
    <HomeLayout>
      <Navbar />
      <LinkClickRow>
        <SwiperImage />
        <LinkClick />
      </LinkClickRow>
      <Search />
      <Frequencyinfo />
      <UsefulInfo />
      <Question />
      <ClubInfo />
      <Footer />
    </HomeLayout>
  );
};
const HomeLayout = styled.div`
  padding: 0 250px;
  background-color: white;
`;
const LinkClickRow = styled.div`
  display: flex;
  gap: 50px;
`;

export default Home;
