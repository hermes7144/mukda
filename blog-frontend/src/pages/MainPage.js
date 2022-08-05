import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import styled from 'styled-components';

const MainPage = () => {
  const MainBlock = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    width: 1024px;
    margin: 0 auto; /* 중앙 정렬 */

    /* 브라우저 크기에 따라 가로 사이즈 변경 */
    @media (max-width: 1024px) {
      width: 768px;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  `;
  const HeaderBlock = styled.div`
    width: 100%;
    height: 500px;
    background: url('img/main_image.jpg');
    background-size: cover;

    h1 {
      color: white;
    }
  `;

  const SubBlock = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;

  const SubItemBlock = styled.div`
    width: 33%;
    height: 150px;
    background: yellow;
  `;

  return (
    <div>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <HeaderContainer />
      <MainBlock>
        <HeaderBlock>
          <h1>걱정없이 맛있는 것을 먹고 살기 위해서!</h1>
        </HeaderBlock>
        <SubBlock>
          <SubItemBlock>지속적인 삶을 위해서</SubItemBlock>
          <SubItemBlock>아이들에게 걱정없는 먹거리를</SubItemBlock>
          <SubItemBlock>현명한 고객이 현명한 기업을 만든다</SubItemBlock>
        </SubBlock>
      </MainBlock>
    </div>
  );
};

export default MainPage;
