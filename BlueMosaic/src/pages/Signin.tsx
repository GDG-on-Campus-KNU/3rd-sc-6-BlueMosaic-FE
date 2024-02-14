import styled from "@emotion/styled/"
import { Wrapper, Container, DivContainter } from "../styles/Layout"
import LoginBackround from "../assets/LoginBackgrorund.jpg"
import WaterWave from 'react-water-wave';

export const Signin = () => {

  return(
    <WaterWave imageUrl={LoginBackround}>
      {({ pause, play }) => (
              <Wrapper>
                <Container>
                <DivContainter>

                </DivContainter>
                </Container>
              </Wrapper>
            )}
    </WaterWave>
  )
}