import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import firstSVG from "../assets/First.svg";
import secondSVG from "../assets/Second.svg";
import thirdSVG from "../assets/Third.svg";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Content = ({ title, subtitle, handleClickStart, handleClickWatch }: { title: string; subtitle: string; handleClickStart: () => void; handleClickWatch: () => void; }) => (
  <ContentWrapper>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <ButtonWrapper>
      <Button onClick={handleClickStart}>
        Get Started
      </Button>
      <Button onClick={handleClickWatch}>
        Watch Video
      </Button>
    </ButtonWrapper>
  </ContentWrapper>
);


export const LandingPage = () => {
  const [clicked, setClicked] = useState(0);
  const navigate = useNavigate();

  const handleImageClick = () => {
    setClicked((prevClicked) => (prevClicked < 3 ? prevClicked + 1 : 0));

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

  const handleClickWatch = () => {
    const youtubeLink = "https://www.youtube.com/your_video_link_here";
    window.open(youtubeLink, "_blank");
  }

  const handleClickStart = () => {
    navigate("/home");
  }
  
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
      handleClickStart={handleClickStart}
      handleClickWatch={handleClickWatch}
    />
    
    <ImageContainer zIndex={3} clicked={clicked === 3}>
      <img
        src={firstSVG}
        alt="first"
        onClick={handleImageClick}
        style={{
          left: "5rem",
          display: "flex",
          position: "fixed",
          top: 0,
        }}
      />
      </ImageContainer>

      <ImageContainer zIndex={2} clicked={clicked === 2}>
        <img src={secondSVG} alt="second" onClick={handleImageClick} />
      </ImageContainer>

      <ImageContainer zIndex={1} clicked={clicked === 1}>
        <img src={thirdSVG} alt="third" onClick={handleImageClick}         style={{
          left: "-5rem",
          display: "flex",
          position: "fixed",
          top: 0,
        }} />
      </ImageContainer>
  </StyledLandingPage>);
}

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const StyledLandingPage = styled.div`
  display: flex;
  background: #165ED6;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  color: var(--white-color, #FFF);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5.75rem;
  z-index: 1000;

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

const ImageContainer = styled.div<{ zIndex: number; clicked: boolean }>`
  width: 100%;
  display: flex;
  position: fixed; 
  top: 0; 

  img {
    height: 100vh;
    width: auto;
    cursor: pointer;
    transition: transform 0.5s ease;
    transform: translateX(${(props) => (props.clicked ? "-10%" : "30%")});
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
  cursor: pointer;  
  transition: filter 0.3s ease; 

  &:hover {
    filter: brightness(80%);  
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`