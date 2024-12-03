// pages/QAPage.js
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
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const QAList = styled.ul`
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
`;

const QAItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Question = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const Answer = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

const QAPage = ({ isSidebarOpen, toggleSidebar }) => {
  const QAData = [
    {
      question: '우먼스 남성상품과 여성상품군의 차이점은 무엇인가요?',
      answer:
        '우먼스 남성상품과 여성상품은 크기, 디자인 및 스타일에서 차이가 있습니다. 남성상품은 더 넓고 루즈한 핏이 특징입니다.',
    },
    {
      question: '배송은 얼마나 걸리나요?',
      answer:
        '보통 배송은 3~5 영업일이 소요됩니다. 특정 지역에서는 추가 시간이 소요될 수 있습니다.',
    },
    {
      question: '환불 정책은 어떻게 되나요?',
      answer:
        '구매 후 14일 이내에 환불 요청이 가능합니다. 제품은 미사용 상태여야 하며, 원래 포장 상태로 반환해야 합니다.',
    },
    {
      question: '멤버십 혜택은 무엇인가요?',
      answer:
        '멤버십 고객은 10% 추가 할인, 무료 배송, 그리고 신제품 우선 구매 기회를 제공합니다.',
    },
  ];

  return (
    <Layout>
      <MenuSection isSidebarOpen={isSidebarOpen} />
      <Content>
        <Header>
          <Title>Q&A</Title>
        </Header>
        <QAList>
          {QAData.map((item, index) => (
            <QAItem key={index}>
              <Question>{item.question}</Question>
              <Answer>{item.answer}</Answer>
            </QAItem>
          ))}
        </QAList>
      </Content>
    </Layout>
  );
};

export default QAPage;
