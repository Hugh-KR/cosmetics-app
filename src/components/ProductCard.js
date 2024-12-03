// components/ProductCard.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 100%;
  max-width: 400px; /* 최대 너비 설정 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const ProductImage = styled.div`
  width: 400px;
  height: 300px; /* 이미지 크기 조정 */
  background-color: #eee;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지 비율 유지 */
  }
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const ProductRating = styled.p`
  font-size: 16px;
  color: #888;
`;

const ProductCard = ({ url, img, name, rating, review }) => {
  return (
    <CardContainer to={url}>
      <ProductImage>{img}</ProductImage>
      <ProductName>{name}</ProductName>
      <ProductRating>
        ⭐ {rating} / 5 ({review} 리뷰)
      </ProductRating>
    </CardContainer>
  );
};

export default ProductCard;
