import styled from "@emotion/styled/"
import { Wrapper, Container } from "../styles/Layout"
import Signupbackground from "../assets/SignupBackground.jpg"
import WaterWave from 'react-water-wave';

export const Signup = () => {

  return(
    <WaterWave imageUrl={Signupbackground}>
      {({ pause, play }) => (
              <Wrapper>
                <Container>
                <h1>이너리ㅓㅣㅇ나ㅣㄹ나</h1>
                </Container>
              </Wrapper>
            )}
    </WaterWave>
  )
}