import React from 'react';
import styled from 'styled-components';
import MenuSection from '../components/MenuSection';
import Product2Image from '../img/product2.png';

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

const Product2 = ({ isSidebarOpen, toggleSidebar }) => {
  // 성분 목록을 배열로 관리
  const ingredients = [
    '병풀추출물',
    '부틸렌글라이콜',
    '정제수',
    '글리세레스-26',
    '메틸프로판다이올',
    '글리세린',
    '폴리글리세린-3',
    '사카라이드하이드롤리세이트',
    '1,2-헥산다이올',
    '판테놀',
    '자일리틸글루코사이드',
    '알란토인',
  ];

  // 후기 목록을 배열로 관리
  const reviews = [
    {
      title: '보습이 되는 느낌 많이 끈적이지 않고 가벼워서 좋아요',
      content: '제품이 피부에 잘 맞고 향도 좋아요.',
    },
    {
      title: '항상 민감성 피부라 고민이 많아서',
      content: '앞으로도 꾸준히 쓸 원픽라인이예요! 발림성도 짱 좋습니다!',
    },
    {
      title: '이벤트하길래 고민 없이 구매했습니다.',
      content: '투명한 제형만큼 안바른것처럼 빠르게 흡수 되네요~',
    },
    {
      title: '모공이 쫀쫀해지는 느낌!',
      content: '지금 5일째 매일 쓰구 있는데 확실히 피부가 매끈해졌습니다',
    },
    {
      title: '즉각적으로 약간 화하게 시원해지는게 너무 좋았어요',
      content:
        '환절기라 피부가 엄청 심하게 뒤집어져서 만지기만해도 아파서 순한것만 바르고 스킨케어 단계를 많이 줄이는중인데 자극없이 좋은거같아요ㅜㅜ',
    },
  ];

  return (
    <Layout>
      <MenuSection isSidebarOpen={isSidebarOpen} />
      <Content>
        <ImageSection>
          {<img src={Product2Image} width="100%" height="100%" />}
        </ImageSection>

        <InfoSection>
          <ProductTitle>Product2</ProductTitle>
          <Price>₩ 16,000</Price>
          <Rating>4.2 / 5 (105 리뷰)</Rating>

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

export default Product2;
