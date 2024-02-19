import React from 'react';
import WaterWave from 'react-water-wave';
import HomeSVG from '../assets/HomeSVG.svg'
import { Container, Wrapper } from '../styles/Layout';
import islandSVG from "../assets/islandSVG.svg"
import { Sidebar } from '../components/Sidebar';
import { useNavigate } from "react-router-dom"
import styled from '@emotion/styled';
import { TestApis } from '../hooks/useQuery';
import { UserApis } from '../hooks/useQuery2';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (svg: string) => {
    switch (svg) {
      case 'Ranking':
        navigate('/rank');
        break;
      case 'Collection':
        TestApis.test();
        // navigate('/collection');
        break;
      case 'Mypage':
        UserApis.changeNickName();
        // navigate('/mypage');
        break;
      case 'Login':
        navigate('/signin');
        break;
      case 'Trash':
        navigate('/trash');
        break;
      case 'Ocean':
        navigate('/ocean');
        break;
      default:
        break;
    }
  };


  return (
    <>
    <Wrapper backgroundImage={HomeSVG}>
      <WaterWave imageUrl={HomeSVG}>
        {({ pause, play }) => (
          <Container>
            <StyledWrapper>
              <Sidebar.wrapper>
                <Sidebar.title text="BlueMosaic"/>
                <Sidebar.Container>
                  <Sidebar.item text='Ranking' svg='Ranking' onClick={()=> handleClick('Ranking')}/>
                  <Sidebar.item text='Collection' svg='Collection' onClick={()=> handleClick('Collection')}/>
                  <Sidebar.item text='Mypage' svg='Mypage' onClick={()=> handleClick('Mypage')}/>
                  <Sidebar.item text='Login' svg='Login' onClick={()=> handleClick('Login')}/>
                </Sidebar.Container>
              </Sidebar.wrapper>

              <ClickableArea onClick={() => handleClick('Trash')} />
              <ClickableArea onClick={() => handleClick('Ocean')} isBottom />

              <HomeContainer>
                <Image src={islandSVG} alt='island' />
              </HomeContainer>
            </StyledWrapper>
        </Container>
        )}
      </WaterWave>
      </Wrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`

const HomeContainer = styled.div`
  display: flex;
  position: absolute;
  width: 80%;
  max-width: 50rem; 
  right: 2rem;
  top: 50%;
  transform: translateY(-45%);
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ClickableArea = styled.div<{ isBottom?: boolean }>`
  position: absolute;
  width: 70%;
  height: 50%;
  max-width: 50rem; 
  right: 2rem;
  top: 10%;
  transform: translateY(0%);
  top: ${(props) => (props.isBottom ? '50%' : '0')};
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
`;