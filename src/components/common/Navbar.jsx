import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavbarLayout>
      <NavbarListLeft>
        <img src="images/skuAlarmLogo.png" alt="캠퍼스알리미 로고" />
        <NavbarItemLeft>SKU 캠퍼스알리미</NavbarItemLeft>
      </NavbarListLeft>
      <NavbarListRight>
        <NavbarItemRight className="questionBoard">질문 게시판</NavbarItemRight>
        <NavbarItemRight className="loginSignUp">로그인 / 회원가입</NavbarItemRight>
      </NavbarListRight>
    </NavbarLayout>
  );
};

const NavbarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;
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

const NavbarItemLeft = styled.li`
  font-size: 26px;
  font-weight: bold;
`;

const NavbarListRight = styled.ul`
  display: flex;
  align-items: baseline;
`;

const NavbarItemRight = styled.li`
  font-size: 18px;
  margin-left: 20px;
  cursor: pointer;

  &.questionBoard {
    color: #5c5c5c;
    font-size: 23px;
  }

  &.loginSignUp {
    color: #8b8b8b;
    font-size: 15px;
  }
`;

export default Navbar;
