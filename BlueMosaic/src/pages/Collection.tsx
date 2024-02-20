import { Wrapper, Container } from "../styles/Layout"
import styled from "@emotion/styled"
import { Dashboard } from "../components/dashboard/dashboard"
import { MiniFrameSVG } from "../components/dashboard/MiniFrameSVG"
import HomeSVG from "../assets/HomeSVG.svg"
import imageUrl from "../assets/UploadBackground.jpg"

export const Collection = () => {

  return(
    <Wrapper backgroundImage={HomeSVG} style={{ backgroundSize: 'cover' }}>
      <Container>
        <Dashboard currentPage="Collection">
          {/* Grid */}
          <GridContainer>
            <MiniFrameSVG imageUrl={imageUrl} text={"cod"} date={"2024-01-01"} handleCircleClickParent={""}/>
            <MiniFrameSVG imageUrl={imageUrl} text={"cod"} date={"2024-01-01"} handleCircleClickParent={""}/>
            <MiniFrameSVG imageUrl={imageUrl} text={"cod"} date={"2024-01-01"} handleCircleClickParent={""}/>
            <MiniFrameSVG imageUrl={imageUrl} text={"cod"} date={"2024-01-01"} handleCircleClickParent={""}/>
            <MiniFrameSVG imageUrl={imageUrl} text={"cod"} date={"2024-01-01"} handleCircleClickParent={""}/>
            <MiniFrameSVG imageUrl={imageUrl} text={"cod"} date={"2024-01-01"} handleCircleClickParent={""}/>
          </GridContainer>
        </Dashboard>
      </Container>
    </Wrapper>
  );
}

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  gap: 16px;
  align-items: stretch; /* 수정된 부분 */
  align-content: flex-start; /* 수정된 부분 */
`;
