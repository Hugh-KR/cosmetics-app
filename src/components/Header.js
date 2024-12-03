// components/Header.js
import React from 'react';
import styled from 'styled-components';
import LogoImage from '../img/logo.png';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Logo = styled.div`
  padding: 5px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const HamburgerButton = styled.button`
  position: absolute;
  bottom: 10px; /* 헤더의 아래쪽 */
  left: 20px; /* 헤더 내부에서 왼쪽 */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 1000;
`;

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      <HeaderContainer>
        <Logo>
          <Link to="/">
            <img src={LogoImage} width="100px" alt="Logo" />
          </Link>
        </Logo>
        <HamburgerButton onClick={toggleSidebar}>
          {isSidebarOpen ? '✖️' : '☰'}
        </HamburgerButton>
      </HeaderContainer>
    </>
  );
};

export default Header;
