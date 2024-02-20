import styled from "@emotion/styled"
import { Wrapper, Container} from "../styles/Layout"
import HomeSVG from "../assets/HomeSVG.svg"
import WaterWave from 'react-water-wave';
import PolaroidSVG from "../assets/Polaroid.svg"
import { useState } from "react"
import imageUrl from "../assets/UploadBackground.jpg"

export const Trash = () => {
  const [showSmartphone, setShowSmartphone] = useState(false);

  const handleClick = () => {
    setShowSmartphone(true);
  };

  return(
    <WaterWave imageUrl={ HomeSVG } style={{ backgroundSize: 'cover' }}>
      {({ pause, play }) => (
              <Wrapper>
                <Container>
                  
                  <PolaroidWrapper>
                    <img src={PolaroidSVG} alt="PolaroidSVG"/>
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