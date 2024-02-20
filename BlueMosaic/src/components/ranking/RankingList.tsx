import styled from "@emotion/styled"

export const RankingList = () => {
  return (
    <RankingWrapper>
      <h1>Leaderboard</h1>

      <MyScore>
        <section>
          <span>My score</span>
          <div>1222P</div>
        </section>
      </MyScore>


      <RankingTop>
          <BehindSecondDiv>
            <circle></circle>
            <span>{"thirdName"}</span>
            <em>{"300"}P</em>
          </BehindSecondDiv>

          <FrontDiv>
            <span>{"thirdName"}</span>
            <em>{"300"}P</em>
          </FrontDiv>

          <BehindThirdDiv>
            <span>{"thirdName"}</span>
            <em>{"300"}P</em>
        </BehindThirdDiv>
      </RankingTop>

      <RankingMine>
        <Mine>

        </Mine>
        <Mine>

</Mine>
<Mine>

</Mine>
      </RankingMine>

    </RankingWrapper>

  );
};

const RankingWrapper = styled.div`
  padding-top: 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-shrink: 0;
  border-radius: 3.125rem 0rem 0rem 3.125rem;
  background: var(----white-color, #FFF);

  h1 {
    color: var(--googleblue-color);
    text-align: center;
    font-family: Roboto;
    font-size: 2.125rem;
    font-weight: 500;
}` 

const RankingTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
  z-index: 1000;

  span {
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 0.94169rem;
    font-weight: 300;
  } 

  em {
    color: #E4AA00;
    font-family: Montserrat;
    font-size: 1.17706rem;
    font-weight: 700;
  }
`;

const BehindSecondDiv = styled.div`
width: 8rem;
z-index: 2;
height: 8.875rem;
flex-shrink: 0;
border-radius: 0.94169rem 0rem 0rem 0.94169rem;
background: var(----googleGray-color, #DFE1E5);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const BehindThirdDiv = styled.div`
width: 8rem;
height: 8.875rem;
z-index: 1;
flex-shrink: 0;
border-radius: 0rem 0.94169rem 0.94169rem 0rem;
background: var(----googleGray-color, #DFE1E5);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

em{
  color: var(--googlegreen-color);
}
`;

const FrontDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 100;

width: 9.57363rem;
height: 12.47706rem;
flex-shrink: 0;
border-radius: 2.35419rem 2.35419rem 0rem 0rem;
background: var(--googleWhiteGray-color);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

em{
  color: var(--googleblue-color);
}
`;

const RankingMine = styled.section`

`;

const Mine = styled.div`

`;

const MyScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;

  span {
    color: var(--1st-text, #4A4543);
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 500;
  }

  div {
    display: flex;
    width: 22.5rem;
    padding: 0.8125rem 17.4375rem 0.8125rem 1rem;
    align-items: center;
    border-radius: 0.5rem;
    border: 1px solid var(--Stroke, #DADADA);
  }
`