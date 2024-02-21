import styled from "@emotion/styled"
import GoogleOneSVG from "../assets/GoogleOne.svg"
import { Button } from "./common/Button"

export const Toast = ({ found, points, button1, button2, handleClickUpload, handleGoto }) => {

  return(
    <ToastWrapper>
      <Left>
        <img src={GoogleOneSVG} alt="GoogleOneSVG"/>
      </Left>
      <MainContent>
        <MainText>
          <em>{found}</em>
          <p>{points}</p>
        </MainText>

        <Button.Wrapper>
          <Button.SetButton text={button1} buttonType="secondary" onClick={handleClickUpload}/>
          <Button.SetButton text={button2} buttonType="primary" onClick={handleGoto}/>
        </Button.Wrapper>
      </MainContent>

    </ToastWrapper>
  )
}

const ToastWrapper = styled.section`
position: absolute;
bottom: 2rem;
right: 2rem;
z-index: 1000;

display: flex;
width: 22.4375rem;
align-items: center;
flex-shrink: 0;
border-radius: 0.5rem;
border: 1px solid #E8EAED;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.20);

transition: right 0.3s ease; 
`
const Left = styled.section`
display: flex;
padding: 4.3125rem 1.75rem;
align-items: flex-start;
gap: 0.5rem;
flex-shrink: 0;
border-right: 1px solid #E8EAED;
background: var(----white-color, #FFF);

img {
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
}
`

const MainContent = styled.section`
  display: flex;
  width: 16.875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.125rem;
  flex-shrink: 0;
  align-self: stretch;
  background: var(----white-color, #FFF);
  box-sizing: border-box;
  padding: 1rem;
`
const MainText = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
align-self: stretch;
font-family: Roboto;
font-size: 0.875rem;
letter-spacing: 0.00438rem;

em {
  color: #3C4043;
  font-weight: 600;
  line-height: 1.6875rem; /* 192.857% */
  margin: 0;
  padding: 0;
}

p {
  color: #5F6368;
  font-weight: 400;
  line-height: 1.1875rem; /* 135.714% */
  margin: 0;
  padding: 0;
}
`