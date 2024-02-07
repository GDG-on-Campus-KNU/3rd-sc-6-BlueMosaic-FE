import React from 'react';
import WaterWave from 'react-water-wave';
import HomeSVG from '../assets/HomeSVG.svg'
import islandSVG from "../assets/islandSVG.svg"

export const Home: React.FC = () => {
  return (
    <>
      <WaterWave imageUrl={HomeSVG as string} style={{ width: '100vw', height: '100vh', backgroundSize: 'cover' }}>
        {({ pause, play }) => (
          <>
            <div className='Home-wrapper'>
              <img src={islandSVG} alt='island'/>
            </div>
          </>
        )}
      </WaterWave>
    </>
  );
};
