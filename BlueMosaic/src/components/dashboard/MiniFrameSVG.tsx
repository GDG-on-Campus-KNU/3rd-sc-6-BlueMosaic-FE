import styled from "@emotion/styled"

export const MiniFrameSVG = ({ handleCircleClickParent, imageUrl, date, text }) => {
  const formattedDate = new Date(date).toISOString().split('T')[0];

  return (
    <FrameWrapper onClick={handleCircleClickParent}>
      <img src={`data:image/png;base64, ${imageUrl}`} alt="img" />
      <span>{text}</span>
      <p>{formattedDate}</p>
    </FrameWrapper>
  );
}

const FrameWrapper = styled.div`
display: flex;
max-width: 17.8125rem;
max-height: 19.8125rem;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
cursor: pointer;

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
  align-self: stretch;
  color: var(----font-color, #00276F);
  text-align: center;
  font-family: "Potta One";
  font-size: 1.5rem;
}

p {
  color: var(----font-color, #00276F);
  text-align: right;
  font-family: "Potta One";
  font-size: 1rem;
  margin: 0;
  margin-left: auto;
}
`