// pages/EventPage.js
import React from 'react';
import styled from 'styled-components';
import MenuSection from '../components/MenuSection';

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #ddd;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const EventList = styled.ul`
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
`;

const EventItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const EventTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const EventDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const EventPage = ({ isSidebarOpen, toggleSidebar }) => {
  const eventData = [
    {
      title: '이벤트 1',
      description: '이벤트 1에 참여하고 다양한 혜택을 누리세요!',
    },
    {
      title: '이벤트 2',
      description: '이벤트 2에 참여하시면 특별한 상품을 받아보실 수 있습니다!',
    },
    {
      title: '이벤트 3',
      description: '이벤트 3에서 할인 혜택을 즐기세요!',
    },
  ];

  return (
    <Layout>
      <MenuSection isSidebarOpen={isSidebarOpen} />
      <Content>
        <Header>
          <Title>이벤트</Title>
        </Header>
        <EventList>
          {eventData.map((event, index) => (
            <EventItem key={index}>
              <EventTitle>{event.title}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
            </EventItem>
          ))}
        </EventList>
      </Content>
    </Layout>
  );
};

export default EventPage;
