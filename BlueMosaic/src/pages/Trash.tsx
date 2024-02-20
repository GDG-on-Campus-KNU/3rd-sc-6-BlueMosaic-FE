import styled from "@emotion/styled"
import { Wrapper, Container} from "../styles/Layout"
import HomeSVG from "../assets/HomeSVG.svg"
import WaterWave from 'react-water-wave';
import PolaroidSVG from "../assets/Polaroid.svg"
import { useState } from "react"
import imageUrl from "../assets/UploadBackground.jpg"
import { Frame } from "../components/FrameSVG";

export const Trash = () => {
  const [showFrame, setShowFrame] = useState(false);

  const handleClick = () => {
    setShowFrame(true);
  };

  return(
    <WaterWave imageUrl={ HomeSVG } style={{ backgroundSize: 'cover' }}>
      {({ pause, play }) => (
              <Wrapper>
                <Container>
                  
                  <PolaroidWrapper>
                    <img src={PolaroidSVG} alt="PolaroidSVG" onClick={handleClick}/>
                    { showFrame && <Frame imageUrl={imageUrl} text="tess"/> }
                  </PolaroidWrapper>
                </Container>
              </Wrapper>
            )}
    </WaterWave>
  )
}

const PolaroidWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 

  img {
    width: 70%;
    height: 70%;
  }
`