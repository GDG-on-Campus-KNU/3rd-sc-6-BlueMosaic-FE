import styled from "@emotion/styled"
import { TrashInfoStore } from "../../stores/TrashStore";
import { RankingApis } from "../../hooks/useRankingQuery";
import { useEffect, useState } from "react";
import { FriendInfoStore } from "../../stores/FriendStore";

export const RankingList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await RankingApis.get();
        setData(result);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 


  return (
    <RankingWrapper>
      <h1>Leaderboard</h1>

      <MyScore>
        <section>
          <span>My score</span>
          <div>{TrashInfoStore.getState().totalScore}P</div>
        </section>
      </MyScore>


      <RankingTop>
          <BehindSecondDiv>
            <img src={data && data[2]?.userImageUrl} alt="img"/>
            <span>{"data && data[2].username"}</span>
            <em>{data && data[2]?.score}</em>
          </BehindSecondDiv>

          <FrontDiv>
            <img src={data && data[0]?.userImageUrl} alt="img"/>
            <span>{"thirdName"}</span>
            <em>{data && data[0]?.score}P</em>
          </FrontDiv>

          <BehindThirdDiv>
            <img src={data && data[1]?.userImageUrl} alt="img"/>
            <span>{"thirdName"}</span>
            <em>{data && data[1]?.score}P</em>
        </BehindThirdDiv>
      </RankingTop>

      <RankingMine>
        <Mine>
          <Profile/>
          <div>
            <span>이름</span>
            <em>100P</em>
          </div>
        </Mine>

        <Friend>
          <Profile/>
          <div>
            <span>이름</span>
            <em>100P</em>
          </div>
        </Friend>

        <Friend>
          <Profile/>
          <div>
            <span>이름</span>
            <em>100P</em>
          </div>
        </Friend>
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
    font-weight: 700;
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
display: flex;
padding: 3.125rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.62775rem;
flex-shrink: 0;
align-self: stretch;

span {
  color: #FAFCFF;
  font-family: Roboto;
  font-size: 1.09863rem;
  font-weight: 600;
  line-height: 150%; /* 1.64794rem */
}

em {
  color: rgba(240, 239, 239, 0.77);
  font-family: Roboto;
  font-size: 0.94169rem;
  font-weight: 500;
  line-height: 150%; /* 1.4125rem */
  text-transform: capitalize;
}
`;

const Profile = styled.img`
width: 3.45275rem;
height: 3.45275rem;
border-radius: 3.92363rem;
background: #D9D9D9;
`;

const Mine = styled.div`
display: flex;
padding: 0.9375rem 11.6875rem 0.9375rem 1.25rem;
align-items: center;
gap: 1rem;
align-self: stretch;
border-radius: 1.25563rem;
background: var(--gradient, linear-gradient(135deg, #4285F4 0%, #B068E8 100%));

div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
`;

const Friend = styled.section`
display: flex;
padding: 0.9375rem 11.6875rem 0.9375rem 1.25rem;
align-items: center;
gap: 1rem;
align-self: stretch;
border-radius: 1.25563rem;
background: var(--googleWhiteGray-color);

div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

span{
  color: var(--font-color);
}

em {
  color: var(--font-color);
}
`

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