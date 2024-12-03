// pages/EventPage.js
import React from 'react';
import styled from 'styled-components';
import MenuSection from '../components/MenuSection';
import EventCard from '../components/EventCard';
import EventBanner1Image from '../img/eventBanner1.png';
import EventBanner2Image from '../img/eventBanner2.png';
import EventBanner3Image from '../img/eventBanner3.png';

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
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const EventGrid = styled.div`
  display: flex;
  flex-direction: column; /* 세로 배치 */
  gap: 20px; /* 항목 간 간격 */
`;

const EventPage = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <Layout>
      <MenuSection isSidebarOpen={isSidebarOpen} />
      <Content>
        <Header>
          <Title>이벤트</Title>
        </Header>
        <EventGrid>
          <EventCard img={<img src={EventBanner1Image} />} />
          <EventCard img={<img src={EventBanner2Image} />} />
          <EventCard img={<img src={EventBanner3Image} />} />
        </EventGrid>
        {/* <EventList>
          {eventData.map((event, index) => (
            <EventItem key={index}>
              <EventImage src={event.image} />
            </EventItem>
          ))}
        </EventList> */}
      </Content>
    </Layout>
  );
};

export default EventPage;
