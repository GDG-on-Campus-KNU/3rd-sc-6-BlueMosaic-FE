import styled from "@emotion/styled"
import { Wrapper, Container, DivCenterContainter } from "../styles/Layout"
import UploadBackGround from "../assets/UploadBackground.jpg"
import WaterWave from 'react-water-wave';
import { CamSVG } from "../components/CamSVG";
import { SmartphoneSVG } from "../components/SmartphoneSVG";
import { useState } from "react"
import imageUrl from "../assets/UploadBackground.jpg"

export const Ocean = () => {
  const [showSmartphone, setShowSmartphone] = useState(false);

  const handleCircleClickParent = () => {
    console.log('Circle clicked in parent!');
    setShowSmartphone(true);
  };

  const handleClickParent = () => {
    console.log('Circle clicked in parent!');
    
  };

  return(
    <WaterWave imageUrl={ UploadBackGround } style={{ backgroundSize: 'cover' }}>
      {({ pause, play }) => (
              <Wrapper>
                <Container>
                  
                { 
                  showSmartphone ? (
                    <SmartphoneWrapper>
                      <SmartphoneSVG handleClickParent={handleClickParent} imageUrl={imageUrl} />
                    </SmartphoneWrapper>
                  ) : (
                    <CamWrapper>
                      <CamSVG handleCircleClickParent={handleCircleClickParent}/>
                    </CamWrapper>
                  )
                }

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

  SmartphoneSVG {
    width: 50%;
    height: 50%;
  }
`

const SmartphoneWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 

  CamSVG {
    width: 40%;
    height: 40%;
  }
`