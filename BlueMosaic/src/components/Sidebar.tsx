import HomeSVG from "../assets/HomeSVG.svg"
import styled from "@emotion/styled";

interface SidebarProps{
  text: string;
  svg: string;
  onClick?: ()=>void; 
}

const getSVG = (svg:string) =>{
  switch(svg){
    case "home": return HomeSVG;
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

  item: ({ text, svg, onClick }:SidebarProps ) => {
    const SVGcomponent = getSVG(svg);
    return(
      <StyledItem>
        <img src={SVGcomponent} alt="SVGcomponent"/>
        <span className="text">{text}</span>
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


const Line = styled.div`
display: flex;
width: 70%;
margin: 0 auto;
stroke-width: 1px;
stroke: #003A6F;
`

const StyledWrapper = styled.div`
`

const StyledItem = styled.div`
`

const StyledTitle = styled.div`
  color: var(--font-color);
`;