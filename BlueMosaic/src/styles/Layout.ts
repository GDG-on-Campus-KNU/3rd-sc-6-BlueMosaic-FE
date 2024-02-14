import styled from "@emotion/styled"
import WaterWave from 'react-water-wave';

export const Wrapper = styled.main(({ backgroundImage }: { backgroundImage: string }) => `
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage}); 
`);

export const WrapperWave = styled(WaterWave)`
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: coulmn;
  justify-content: center;
`;

export const DivContainter = styled.div`
  display: flex;
  width: 37.5rem;
  height: 27.875rem;
  padding-top: 4.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-shrink: 0;
  border-radius: 3.125rem;
  background: var(----white-color, #FFF);
`