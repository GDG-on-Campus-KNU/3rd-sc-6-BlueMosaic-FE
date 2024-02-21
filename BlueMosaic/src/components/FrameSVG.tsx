import styled from "@emotion/styled"

export const Frame = ({ imageUrl, text="plastic bag", point="150" }) => {

  return (
    <FrameWrapper>
      <img src={imageUrl} alt="img"/>
      <span>{text}</span>
      <em>get score {point}P</em>
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
flex-shrink: 0;
border-radius: 0.3125rem;
background: linear-gradient(144deg, #FFF 0%, #EEE 99.97%, #ECECEC 99.98%, #E9E9E9 99.99%, #E9E9E9 100%);
font-family: "Potta One";
text-align: center;
color: var(----font-color, #00276F);

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
  font-size: 1.5rem;
  margin: 0;
}

em  {
    font-size: 1rem;
    margin: 0;
}
`