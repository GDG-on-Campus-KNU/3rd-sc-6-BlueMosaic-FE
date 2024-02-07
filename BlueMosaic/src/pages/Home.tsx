import React from 'react';
import WaterWave from 'react-water-wave';
import HomeSVG from '../assets/HomeSVG.svg'
import islandSVG from "../assets/islandSVG.svg"
import { Sidebar } from '../components/Sidebar';

export const Home: React.FC = () => {
  return (
    <>
      <WaterWave imageUrl={HomeSVG as string} style={{ width: '100vw', height: '100vh', backgroundSize: 'cover' }}>
        {({ pause, play }) => (
          <>
            <div className='Home-wrapper'>
              <Sidebar.wrapper>
                <Sidebar.title text="BlueMosaic"/>
                <Sidebar.Container>
                  <Sidebar.item text='Ranking' svg='Ranking'/>
                  <Sidebar.item text='Collection' svg='Collection'/>
                  <Sidebar.item text='Mypage' svg='Mypage'/>
                  <Sidebar.item text='Login' svg='Login'/>
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
