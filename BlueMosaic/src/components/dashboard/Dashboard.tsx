import styled from "@emotion/styled"
import GoogleSVG from "../../assets/Google.svg"
import { Search } from "./Search"

export const Dashboard = () => {

  return(
  <DashboardWrapper>
    <DashboardSidebar>
      <ol>
        <ol>Dashboard</ol>
        <ol>Advanced Quarry</ol>
        <ol>Event</ol>
      </ol>

    </DashboardSidebar>
    <DashboardContainer>
      <img src={GoogleSVG} alt="google"/>
      <Search/>
    </DashboardContainer>

  </DashboardWrapper>
  )
}

const DashboardWrapper = styled.main`
display: flex;
width: 80%;
height: 80%;
padding-bottom: 0.47231rem;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;
border-radius: 1.875rem;
background: var(----white-color, #FFF);

/* Card Shadows/24dp - Shadow */
box-shadow: 0px 40px 48px 0px rgba(50, 50, 71, 0.25), 0px 24px 24px 0px rgba(50, 50, 71, 0.10);
`

const DashboardSidebar = styled.section`
width: 100%;
height: 5rem;
flex-shrink: 0;

ol {
  display: inline-flex;
  align-items: center;
  gap: 2.5rem;
  color: var(----googleGray-color, #DFE1E5);
font-feature-settings: 'clig' off, 'liga' off;

/* Body/Paragraph - 16px - SB */
font-family: Poppins;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 1.5rem; /* 150% */
}
`

const DashboardContainer = styled.section`
box-sizing: border-box;
width: 100%;
display: flex;
padding: 5rem 13rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.875rem;
flex-shrink: 0;
`