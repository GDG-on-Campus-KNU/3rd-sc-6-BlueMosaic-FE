import { Wrapper, Container } from "../styles/Layout"
import HomeSVG from "../assets/HomeSVG.svg"
import { Dashboard } from "../components/dashboard/dashboard"

export const Collection = () => {

  return(
    <Wrapper backgroundImage={HomeSVG} style={{ backgroundSize: 'cover' }}>
      <Container>
        <Dashboard currentPage="Collection">
          
        </Dashboard>
      </Container>
    </Wrapper>
  );
}