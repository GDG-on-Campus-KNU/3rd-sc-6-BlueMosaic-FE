import styled from "@emotion/styled"
import { Wrapper, Container, DivCenterContainter } from "../styles/Layout"
import UploadBackGround from "../assets/UploadBackground.jpg"
import WaterWave from 'react-water-wave';
import { CamSVG } from "../components/CamSVG";

export const Ocean = () => {

  const handleClick= (event) => {
    event.preventDefault();
  };

  return(
    <WaterWave imageUrl={UploadBackGround} style={{ backgroundSize: 'cover' }}>
      {({ pause, play }) => (
              <Wrapper>
                <Container>
                  <CamWrapper >
                    <CamSVG/>
                  </CamWrapper>
                </Container>
              </Wrapper>
            )}
    </WaterWave>
  )
}

const CamWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 

  img {
    width: 50%;
    height: 50%;
  }
`