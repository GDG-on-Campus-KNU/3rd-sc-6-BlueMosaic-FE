import styled from "@emotion/styled";
import firstSVG from "../assets/First.svg";
import secondSVG from "../assets/Second.svg";
import thirdSVG from "../assets/Third.svg";
import Play from "../assets/Play.svg"
import React, { useState } from 'react';

const Content = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <ContentWrapper>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <ButtonWrapper>
  <Button>
    Get Started
  </Button>
    <Button>
    Watch Video
  </Button>
  </ButtonWrapper>
  </ContentWrapper>
);


export const LandingPage = () => {
  const [clicked, setClicked] = useState(0);

  const handleImageClick = () => {
    setClicked((prevClicked) => prevClicked + 1);

    // 클릭할 때마다 제목과 부제 변경
    if (clicked === 0) {
      setContentInfo({
        title: "New Title 1",
        subtitle: "New Subtitle 1",
      });
    } else if (clicked === 1) {
      setContentInfo({
        title: "New Title 2",
        subtitle: "New Subtitle 2",
      });
    } else if (clicked === 2) {
      setContentInfo({
        title: "New Title 3",
        subtitle: "New Subtitle 3",
      });
    }
  };
  
  const [contentInfo, setContentInfo] = useState({
    title: "GDSC SC3 BlueMosaic",
    subtitle:
      "From the small stuff to the big picture,\norganizes the work so teams know what to do.",
  });

return(  
  <StyledLandingPage>
<Content
  title={contentInfo.title}
  subtitle={contentInfo.subtitle}
  />
    
    <ImageContainer zIndex={3} clicked={clicked === 3}>
        <img src={firstSVG} alt="first" onClick={handleImageClick} />
      </ImageContainer>

      <ImageContainer zIndex={2} clicked={clicked === 2}>
        <img src={secondSVG} alt="second" onClick={handleImageClick} />
      </ImageContainer>

      <ImageContainer zIndex={1} clicked={clicked === 1}>
        <img src={thirdSVG} alt="third" onClick={handleImageClick} />
      </ImageContainer>
  </StyledLandingPage>);
}

const StyledLandingPage = styled.div`
  display: flex;
  background: #165ED6;
  width: 100%;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  color: var(--white-color, #FFF);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5.75rem;

  h1 {
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.5rem;
    letter-spacing: -0.09375rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    font-style: normal;
    line-height: 1.75rem;
    margin-bottom: 2rem;
  }
`;

const ImageContainer = styled.div<{ zIndex: number }>`
  width: 100%;
  display: flex;
  position: absolute;

  img {
    position: absolute;
    height: 100%;
    height: 100vh;
    width: auto;
    right : 0px;
  }

  z-index: ${(props) => props.zIndex};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 1.5rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
  line-height: 1.5rem;
`

const ButtonWrapper = styled.div`
 display: flex;
 gap: 1rem;
`