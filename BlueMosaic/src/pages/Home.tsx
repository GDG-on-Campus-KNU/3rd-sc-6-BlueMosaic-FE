import React from 'react';
import WaterWave from 'react-water-wave';
import HomeSVG from '../assets/HomeSVG.svg'
import islandSVG from "../assets/islandSVG.svg"
import { Sidebar } from '../components/Sidebar';
import { useNavigate } from "react-router-dom"
import styled from '@emotion/styled';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (svg: string) => {
    switch (svg) {
      case 'Ranking':
        navigate('/rank');
        break;
      case 'Collection':
        navigate('/collection');
        break;
      case 'Mypage':
        navigate('/mypage');
        break;
      case 'Login':
        navigate('/signin');
        break;
      default:
        break;
    }
  };


  return (
    <>
      <WaterWave imageUrl={HomeSVG}>
        {({ pause, play }) => (
          <>
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


              <Container>
                <Image src={islandSVG} alt='island' />
              </Container>
            </StyledWrapper>
          </>
        )}
      </WaterWave>
    </>
  );
};

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`

const Container = styled.div`
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