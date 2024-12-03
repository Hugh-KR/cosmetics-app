// components/MenuSection.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = styled.div`
  width: ${(props) => (props.isOpen ? '300px' : '0')};
  min-width: ${(props) => (props.isOpen ? '300px' : '0')};
  padding: ${(props) => (props.isOpen ? '20px' : '0')};
  background-color: #f9f9f9;
  border-right: ${(props) => (props.isOpen ? '1px solid #ddd' : 'none')};
  overflow: hidden;
  transition: width 0.3s ease, padding 0.3s ease;
`;

const MenuItem = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

const SubMenu = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  height: ${(props) => (props.isOpen ? 'auto' : '0')};
  transition: opacity 0.3s ease, height 0.3s ease, visibility 0.3s ease;
  overflow: hidden;
`;

const SubMenuItem = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  color: #666;
`;

const MenuSection = ({ isSidebarOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <Sidebar isOpen={isSidebarOpen}>
      <MenuItem isOpen={isSidebarOpen} onClick={toggleSubMenu}>
        화장품
        <span>{isSubMenuOpen ? '▲' : '▼'}</span>
      </MenuItem>
      <SubMenu isOpen={isSidebarOpen && isSubMenuOpen}>
        <SubMenuItem>스킨</SubMenuItem>
        <SubMenuItem>기능성 화장품</SubMenuItem>
        <SubMenuItem>뷰티</SubMenuItem>
      </SubMenu>
      <Link to="/events">
        <MenuItem isOpen={isSidebarOpen}>이벤트</MenuItem>
      </Link>
      <Link to="/qa">
        <MenuItem isOpen={isSidebarOpen}>Q&A</MenuItem>
      </Link>
    </Sidebar>
  );
};

export default MenuSection;
