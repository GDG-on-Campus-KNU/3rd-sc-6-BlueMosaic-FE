import styled from "@emotion/styled"
import GoogleOneSVG from "../assets/GoogleOne.svg"

export const Toast = ({found, points}) => {
  return(
    <ToastWrappaer>
      <Left>
        <img src={GoogleOneSVG} alt="GoogleOneSVG"/>
      </Left>
      <MainContent>
        <em>I found {found}!</em>
        <p>My score is {points}</p>
        
        <ButtonWrapper>
          <button>No thanks</button>
          <button>Collection</button>
        </ButtonWrapper>
      </MainContent>

    </ToastWrappaer>
  )
}

const ToastWrappaer = styled.section`
display: flex;
width: 22.4375rem;
justify-content: center;
align-items: center;
`
const Left = styled.section`
display: flex;
width: 5.5625rem;
padding: 4.3125rem 1.75rem;
align-items: flex-start;
gap: 0.5rem;
flex-shrink: 0;
border-right: 1px solid #E8EAED;
background: var(----white-color, #FFF);
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

const MainContent = styled.section`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 2.125rem;
  align-self: stretch;

em {
  color: #3C4043;
  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.6875rem; /* 192.857% */
  letter-spacing: 0.00438rem;
  margin: 0;
  padding: 0;
}

p {
  color: #5F6368;
  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem; /* 135.714% */
  letter-spacing: 0.00438rem;
  margin: 0;
  padding: 0;
}

button: active {
  display: flex;
  width: 6rem;
  height: 2.25rem;
  padding: 0.5625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  background: #1A73E8;
}

button {
  display: flex;
  width: 6rem;
  height: 2.25rem;
  padding: 0.5625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
}
`
