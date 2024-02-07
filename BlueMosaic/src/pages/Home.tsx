import React from 'react';
import WaterWave from 'react-water-wave';
import HomeSVG from '../assets/HomeSVG.svg';

export const Home: React.FC = () => {
  return (
    <>
      <WaterWave imageUrl={HomeSVG as string} style={{ width: '100vw', height: '100vh', backgroundSize: 'cover' }}>
        {({ pause, play }) => (
          <>
            Hi
          </>
        )}
      </WaterWave>
    </>
  );
};
