// pages/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuSection from '../components/MenuSection';
import ProductCard from '../components/ProductCard';
import PosterImage from '../img/poster.png';
import BannerImage from '../img/banner.webp';
import Product1Image from '../img/product1.png';
import Product2Image from '../img/product2.png';
import Product3Image from '../img/product3.png';

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: bold;
`;

const ProductGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ffebf2;
  text-align: center;
  line-height: 300px;
  font-size: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  color: #ff4081;
`;

const Home = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <Layout>
      <MenuSection isSidebarOpen={isSidebarOpen} />
      <Content>
        <SectionTitle>MD's 추천</SectionTitle>
        <ProductGrid>
          <Link to="/product1">
            <ProductCard
              url="/product1"
              img={<img src={Product1Image} width="100%" height="100%" />}
              name="Product1"
              rating="4.5"
              review="45"
            />
          </Link>
          <Link to="/product2">
            <ProductCard
              url="/product2"
              img={<img src={Product2Image} width="100%" height="100%" />}
              name="Product2"
              rating="4.2"
              review="105"
            />
          </Link>
          <Link to="/product3">
            <ProductCard
              url="/product3"
              img={<img src={Product3Image} width="100%" height="100%" />}
              name="Product3"
              rating="4.7"
              review="20"
            />
          </Link>
        </ProductGrid>
        <Banner>
          <img src={BannerImage} alt="배너 이미지" width="100%" height="100%" />
        </Banner>
      </Content>
    </Layout>
  );
};

export default Home;
