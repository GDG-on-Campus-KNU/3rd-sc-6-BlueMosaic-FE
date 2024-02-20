import styled from "@emotion/styled"
import { Wrapper, Container, DivContainer } from "../styles/Layout"
import RankingBackground from "../assets/RankingBackground.jpg"
import WaterWave from 'react-water-wave';
import { RankingList } from "../components/ranking/RankingList"

export const Ranking = () => {

  return(
    <WaterWave imageUrl={ RankingBackground } style={{ backgroundSize: 'cover' }}>
    {({ pause, play }) => (
      <Wrapper>
        <Container>
          <DivContainer>
            <RankingList/>
          </DivContainer>
        </Container>
      </Wrapper>
    )}
    </WaterWave>
  )
}