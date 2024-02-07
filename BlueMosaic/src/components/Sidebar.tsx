import HomeSVG from "../assets/HomeSVG.svg"
import CollectionSVG from "../assets/Collection.svg"
import LoginSVG from "../assets/Login.svg"
import RankingSVG from "../assets/Ranking.svg"
import MypageSVG from "../assets/Mypage.svg"


import styled from "@emotion/styled";


interface SidebarProps{
  text: string;
  svg: string;
  onClick?: ()=>void; 
}

const getSVG = (svg:string) =>{
  switch(svg){
    case "Collection": return CollectionSVG;
    case "Login": return LoginSVG;
    case "Ranking": return RankingSVG;
    case "Mypage": return MypageSVG;
  }
}

export const Sidebar = {

  wrapper: ({ children }) => {
    return (
      <StyledWrapper>
        {children}
      </StyledWrapper>
    );
  },

  Container: ({ children })=>{
    return(
      <StyledContainer>
        { children }
      </StyledContainer>
    )
  },

  item: ({ text, svg, onClick }:SidebarProps ) => {
    const SVGcomponent = getSVG(svg);
    return(
      <StyledItem>
        <img src={SVGcomponent} alt="SVGcomponent"/>
        <span className="text">{text}</span>
        <LineGray/>
      </StyledItem>
    )
  },

  title: ({ text }: { text:string }) => {
    return(<StyledTitle>
      {text}
      <Line/>
    </StyledTitle>)
  }
}


const StyledContainer = styled.div`
  display: flex;
  width: 15.625rem;
  padding: 0rem 0.75rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const Line = styled.div`
flex-shrink: 0;
display: flex;
width: 70%;
margin: 0 auto;
stroke-width: 1px;
stroke: var(--font-color);
`

const LineGray = styled.div`
width: 15.84375rem;
height: 0.00225rem;
transform: rotate(-0.008deg);
flex-shrink: 0;
stroke-width: 1px;
stroke: #DBDBDB;
`

const StyledWrapper = styled.div`
  width: 17.5rem;
  height: 23.125rem;
  flex-shrink: 0;
  background: var(--googleWhiteGray-color);
  border-radius: 0rem 0rem 0.625rem 0.625rem;
`

const StyledItem = styled.div`
  width: 15rem;
  height: 1rem;
  display: inline-flex;
  align-self: stretch;
  gap: 0.6875rem;
  display: inline-flex;
  padding: 0rem 0.75rem;
  align-items: center;

  color: var(--font-color);
  font-family: Itim;
  font-size: 1.125rem;

`

const StyledTitle = styled.div`
width: 100%;
height: 2.5rem;
font-family: "Potta One";

color: var(--font-color, #00276F);
font-family: Itim;
text-align: center;
font-family: "Potta One";
font-size: 1.5rem;
font-weight: 400;

top: 2.38rem;

`;