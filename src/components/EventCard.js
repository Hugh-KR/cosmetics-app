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
  max-width: 1200px; /* 최대 너비 설정 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const EventImage = styled.div`
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

const EventCard = ({ url, img }) => {
  return (
    <CardContainer to={url}>
      <EventImage>{img}</EventImage>
    </CardContainer>
  );
};

export default EventCard;
