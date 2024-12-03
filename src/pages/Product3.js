import React from 'react';
import styled from 'styled-components';
import MenuSection from '../components/MenuSection';
import Product3Image from '../img/product3.png';

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 50px;
`;

const ImageSection = styled.div`
  width: 100%;
  height: 800px;
  background-color: #f0f0f0;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 24px;
  color: #ff4081;
  margin-bottom: 10px;
`;

const Rating = styled.p`
  font-size: 18px;
  color: #888;
`;

const Ingredients = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 570px;
  overflow-y: auto;
`;

const IngredientsList = styled.ul`
  list-style-type: disc;
  margin-top: 10px;
  padding-left: 20px;
`;

const ReviewsSection = styled.div`
  grid-column: 1 / -1;
  margin-top: 50px;
`;

const Review = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const ReviewTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ReviewContent = styled.p`
  font-size: 16px;
  color: #555;
`;

const Product3 = ({ isSidebarOpen, toggleSidebar }) => {
  // 성분 목록을 배열로 관리
  const ingredients = [
    '정제수',
    '녹두추출물',
    '글리세린',
    '카올린',
    '벤토나이트',
    '다이글리세린',
    '옥수수전분',
    '프로판다이올',
    '1,2-헥산다이올',
    '글리세릴글루코사이드',
    '베타인',
    '다이프로필렌글라이콜',
  ];

  // 후기 목록을 배열로 관리
  const reviews = [
    {
      title:
        '가격대가 부담없이 사용하기 좋아요 듬뿍듬뿍 몇번 발라서 사용하면 수분가득합니당',
      content: '겨울에 사용하기에는 가벼울수있어요 여름용으로 추천합니다',
    },
    {
      title: '매일 아침마다 사용하는 제품입니다 흡수가 잘 돼요',
      content: '흡수는 잘 되는데 건조한 느낌이 있어서 크림을 잘 발라주세요',
    },
    {
      title: '촉촉한거같아요',
      content:
        '마스크팩 다른제품샘플도 사은품으로받아서 테스트해볼수있어서 더조았어요',
    },
    {
      title: '재구매 의사 있습니다!',
      content: '항상잘쓰고 있어여 좋아요',
    },
    {
      title: '자극 없이 부드러워요',
      content: '자극도 없고 부드럽게 잘 발려요. 환절기에 잘 쓸 것 같습니다.',
    },
  ];

  return (
    <Layout>
      <MenuSection isSidebarOpen={isSidebarOpen} />
      <Content>
        <ImageSection>
          {<img src={Product3Image} width="100%" height="100%" />}
        </ImageSection>

        <InfoSection>
          <ProductTitle>Product3</ProductTitle>
          <Price>₩ 19,000</Price>
          <Rating>4.7 / 5 (20 리뷰)</Rating>

          <Ingredients>
            <h3>성분표</h3>
            <IngredientsList>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </IngredientsList>
          </Ingredients>
        </InfoSection>

        <ReviewsSection>
          <h2>후기</h2>
          {reviews.map((review, index) => (
            <Review key={index}>
              <ReviewTitle>{review.title}</ReviewTitle>
              <ReviewContent>{review.content}</ReviewContent>
            </Review>
          ))}
        </ReviewsSection>
      </Content>
    </Layout>
  );
};

export default Product3;
