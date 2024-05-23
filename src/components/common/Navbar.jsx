import React from 'react';
import styled from 'styled-components';
import imgLogo from 'images/imgLogo.png';

const Navbar = () => {
  return (
    <NavbarLayout>
      <NavbarListLeft>
        <NavbarImgLogo src={imgLogo} alt="logo image" />
        <NavbarItemLeft>SKU 캠퍼스알리미</NavbarItemLeft>
      </NavbarListLeft>
      <NavbarListRight>
        <div>질문 게시판</div>
        <div>로그인/회원가입</div>
      </NavbarListRight>
    </NavbarLayout>
  );
};

const NavbarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d6d6d6;
  padding: 0 200px;
`;
const NavbarImgLogo = styled.img`
  height: 50px;
  margin-right: 30px;
`;
const NavbarListLeft = styled.ul`
  display: flex;
  align-items: center;
`;

const NavbarItemLeft = styled.li`
  font-size: 22px;
  font-weight: bold;
`;
const NavbarListRight = styled.li`
  display: flex;
`;

export default Navbar;
