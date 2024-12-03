import React from 'react';
import styled from 'styled-components';
import MenuSection from '../components/MenuSection';
import Product1Image from '../img/product1.png';

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

const Product1 = ({ isSidebarOpen, toggleSidebar }) => {
  // 성분 목록을 배열로 관리
  const ingredients = [
    <a
      href="https://kcia.or.kr/cid/search/ingd_view.php?no=2985"
      target="_blank"
      rel="noopener noreferrer"
    >
      캐모마일꽃추출물
    </a>,
    <a
      href="https://msds.kosha.or.kr/MSDSInfo/kcic/msdsdetail.do?viewType=msds&listType=msds&pageIndex=1&chem_id=011581&pageSize=10&temp=&searchCondition=chem_name&searchKeyword=%EA%B8%80%EB%A6%AC%EC%84%B8%EB%A6%B0"
      target="_blank"
      rel="noopener noreferrer"
    >
      글리세린
    </a>,
    <a
      href="https://kcia.or.kr/cid/search/ingd_view.php?no=2922"
      target="_blank"
      rel="noopener noreferrer"
    >
      카프릴릭/카프릭트라이글리세라이드
    </a>,
    <a
      href="https://kcia.or.kr/cid/search/ingd_view.php?no=2080"
      target="_blank"
      rel="noopener noreferrer"
    >
      에틸헥실스테아레이트
    </a>,
    <a
      href="https://kcia.or.kr/cid/search/ingd_view.php?no=3768"
      target="_blank"
      rel="noopener noreferrer"
    >
      폴리글리세릴-3메틸글루코오스다이스테아레이트
    </a>,
    <a
      href="https://kcia.or.kr/cid/search/ingd_view.php?no=5317"
      target="_blank"
      rel="noopener noreferrer"
    >
      다시마추출물
    </a>,
    <a
      href="https://kcia.or.kr/cid/search/ingd_view.php?no=7268"
      target="_blank"
      rel="noopener noreferrer"
    >
      한련초잎추출물
    </a>,
    <a
      href="https://kcia.or.kr/cid/search/ingd_view.php?no=540"
      target="_blank"
      rel="noopener noreferrer"
    >
      병풀추출물
    </a>,
    <a
      href="https://kcia.or.kr/cid/search/ingd_view.php?no=305"
      target="_blank"
      rel="noopener noreferrer"
    >
      무화과추출물
    </a>,
    <a
      href="https://kcia.or.kr/cid/search/ingd_view.php?no=3476"
      target="_blank"
      rel="noopener noreferrer"
    >
      올레라케아아크멜라추출물
    </a>,
    <a
      href="https://kcia.or.kr/cid/search/ingd_view.php?no=2811"
      target="_blank"
      rel="noopener noreferrer"
    >
      당느릅나무뿌리추출물
    </a>,
    <a
      href="https://kcia.or.kr/cid/search/ingd_view.php?no=2739"
      target="_blank"
      rel="noopener noreferrer"
    >
      줄맨드라미씨추출물
    </a>,
  ];

  // 후기 목록을 배열로 관리
  const reviews = [
    {
      title: '하나만발라도 건조함 없이 괜찮다고해요~',
      content: '여드름도 완화되는게 보여요',
    },
    {
      title: '전체적으로 얼굴에 흡수도 잘되고 끈적 거리지않아서 너무좋아요.',
      content: '단점은 향이 조금 아쉽다 정도? 지성피부인데 추천할만합니다.',
    },
    {
      title: '너무 잘 사용하고있어요 !',
      content:
        '남친이 수부지인데 생각보다 엄청 건조하지않고 산뜻하게 마무리되는거 같아요 엄청 만족해하는거같아요 그리고 무엇보다 귀찮아하는데 1개로 다할수있다는게 남자분들 취저가 아닐까 싶어요',
    },
    {
      title: '스킨 로션 자극이 1도없어 가볍게 바르지만 건조하지 않아요',
      content: '소개해준 지인이 고마울 따름이네요',
    },
    {
      title: '상품평 좋아서 샀는데 가격도 너무 좋고',
      content:
        '환경과 동물을 지킨다는 신념이 좋은 회사 제품 이라서 더 신뢰가 가요',
    },
  ];

  return (
    <Layout>
      <MenuSection isSidebarOpen={isSidebarOpen} />
      <Content>
        <ImageSection>
          {<img src={Product1Image} width="100%" height="100%" />}
        </ImageSection>

        <InfoSection>
          <ProductTitle>Product1</ProductTitle>
          <Price>₩ 20,000</Price>
          <Rating>4.5 / 5 (45 리뷰)</Rating>

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

export default Product1;
