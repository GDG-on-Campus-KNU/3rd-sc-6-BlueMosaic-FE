import MonitorSVG from "../assets/Monitor.svg"
import { Wrapper, Container } from "../styles/Layout"
import HomeSVG from "../assets/HomeSVG.svg"
import { Dashboard } from "../components/dashboard/dashboard"

export const Mypage = () => {

  return(
    <Wrapper backgroundImage={HomeSVG} style={{ backgroundSize: 'cover' }}>
      <Container>
        <Dashboard/>
      </Container>
    </Wrapper>
  );
}