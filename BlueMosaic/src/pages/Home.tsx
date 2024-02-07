import React from 'react';
import WaterWave from 'react-water-wave';
import HomeSVG from '../assets/HomeSVG.svg'
import islandSVG from "../assets/islandSVG.svg"
import { Sidebar } from '../components/Sidebar';
import { useNavigate } from "react-router-dom"

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
      <WaterWave imageUrl={HomeSVG as string} style={{ width: '100vw', height: '100vh', backgroundSize: 'cover' }}>
        {({ pause, play }) => (
          <>
            <div className='Home-wrapper'>
              <Sidebar.wrapper>
                <Sidebar.title text="BlueMosaic"/>
                <Sidebar.Container>
                  <Sidebar.item text='Ranking' svg='Ranking' onClick={()=> handleClick('Ranking')}/>
                  <Sidebar.item text='Collection' svg='Collection' onClick={()=> handleClick('Collection')}/>
                  <Sidebar.item text='Mypage' svg='Mypage' onClick={()=> handleClick('Mypage')}/>
                  <Sidebar.item text='Login' svg='Login' onClick={()=> handleClick('Login')}/>
                </Sidebar.Container>
              </Sidebar.wrapper>
              <img src={islandSVG} alt='island'/>
            </div>
          </>
        )}
      </WaterWave>
    </>
  );
};
