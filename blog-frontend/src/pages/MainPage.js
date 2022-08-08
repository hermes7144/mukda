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
    background: url('img/real_food.jpg');
    background-size: cover;
    backgroundcolor: rgba(0, 0, 0, 0.3);
    h1 {
      color: white;
      text-align: center;
      padding-top: 10px;
      font-size: 50px;
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
  `;

  return (
    <div>
      <Helmet>
        <title>MUKDA</title>
      </Helmet>
      <HeaderContainer />
      <MainBlock>
        <HeaderBlock></HeaderBlock>
        <SubBlock>
          <SubItemBlock>
            <h4>지속적인 삶을 위해서</h4>
            <p>
              dfsdfdsfsdfdsfsf iosdfsdfsdfssdjfiosdjfoi sdjiofsdjfosdjf
              iosjiofsdfsdfsdfsdfsdf
            </p>
          </SubItemBlock>
          <SubItemBlock>
            <h4>아이들에게 걱정없는 먹거리를</h4>
            <p>
              dfsdfdsfsdfdsfsfiosdfs dfsdfssdjfiosdjfoisd jiofsdjfosdjfiosjiof
              sdfsdfsdfsdfsdf
            </p>
          </SubItemBlock>
          <SubItemBlock>
            <h4>현명한 고객이 현명한 기업을 만든다</h4>
            <p>
              dfsdfdsfsdfdsfsfio sdfsdfsdfssdjfiosd jfoisdjiofsdjfosdjfios
              jiofsdfsdfsdfsdfsdf
            </p>
          </SubItemBlock>
        </SubBlock>
      </MainBlock>
    </div>
  );
};

export default MainPage;
