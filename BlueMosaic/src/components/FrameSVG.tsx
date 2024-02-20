import styled from "@emotion/styled"

export const Frame = ({ imageUrl, text="text" }) => {

  return (
    <FrameWrapper>
      <img src={imageUrl} alt="img"/>
      <span>{text}</span>
    </FrameWrapper>
  );
}

const FrameWrapper = styled.div`
display: flex;
width: 45vh;
height: 50vh;
padding: 1.25rem 1.875rem;
margin-bottom: 10rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.4375rem;
flex-shrink: 0;
border-radius: 0.3125rem;
background: linear-gradient(144deg, #FFF 0%, #EEE 99.97%, #ECECEC 99.98%, #E9E9E9 99.99%, #E9E9E9 100%);

img {
  flex: 1 0 0;
  align-self: stretch;
  background: #D9D9D9;
  object-fit: cover;
  width: 100%; 
  height: 100%; 
  box-sizing: border-box;
}

span {
  color: var(----font-color, #00276F);
  text-align: center;
  font-family: "Potta One";
  font-size: 1.5rem;
}
`