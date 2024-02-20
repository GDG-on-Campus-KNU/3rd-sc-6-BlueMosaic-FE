import { Wrapper, Container } from "../styles/Layout"
import HomeSVG from "../assets/HomeSVG.svg"
import { Dashboard } from "../components/dashboard/dashboard"
import GoogleSVG from "../assets/Google.svg"
import { Search } from "../components/dashboard/Search"

export const Mypage = () => {

  return(
    <Wrapper backgroundImage={HomeSVG} style={{ backgroundSize: 'cover' }}>
      <Container>
        <Dashboard currentPage="Friend">
          <img src={GoogleSVG} alt="google"/>
          <Search/>
        </Dashboard>
      </Container>
    </Wrapper>
  );
}