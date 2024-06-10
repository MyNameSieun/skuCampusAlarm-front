import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <NavbarLayout>
      <NavbarListLeft>
        <StyledLink to={'/home'}>
          <img src="/images/skuAlarmLogo.png" alt="캠퍼스알리미 로고" />
          <NavbarItemLeft>SKU 캠퍼스알리미</NavbarItemLeft>
        </StyledLink>
      </NavbarListLeft>
      <NavbarListRight>
        <NavbarItemRight className="questionBoard">
          <Link to={'/questionBulletin'}>질문 게시판</Link>
        </NavbarItemRight>
        <NavbarItemRight className="loginSignUp">
          {currentUser ? (
            <>
              <NavbarUserText>{currentUser.nickname}</NavbarUserText>님 /
              <NavbarLogoutText onClick={logout}>로그아웃</NavbarLogoutText>
            </>
          ) : (
            <>
              <Link to={'/login'}>로그인</Link> / <Link to={'/register'}>회원가입</Link>
            </>
          )}
        </NavbarItemRight>
      </NavbarListRight>
    </NavbarLayout>
  );
};

const NavbarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 200px;
  background-color: white;
  white-space: nowrap;
`;

const NavbarListLeft = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  img {
    height: 60px;
    margin-right: 20px;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const NavbarItemLeft = styled.li`
  font-size: 26px;
  font-weight: bold;
`;

const NavbarListRight = styled.ul`
  display: flex;
  align-items: baseline;
`;
const NavbarUserText = styled.span`
  margin-right: 3px;
`;
const NavbarLogoutText = styled.span`
  margin-left: 3px;
`;

const NavbarItemRight = styled.li`
  font-size: 18px;
  margin-left: 20px;
  cursor: pointer;

  &.questionBoard {
    font-size: 23px;
  }

  &.loginSignUp {
    font-size: 15px;
  }
`;

export default Navbar;
