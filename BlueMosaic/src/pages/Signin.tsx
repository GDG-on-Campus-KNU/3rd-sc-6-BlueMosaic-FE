import styled from "@emotion/styled/"
import { Wrapper, Container, DivCenterContainter } from "../styles/Layout"
import LoginBackround from "../assets/LoginBackgrorund.jpg"
import WaterWave from 'react-water-wave';
import GoogleSVG from "../assets/Google.svg"
import GoogleBtn from "../assets/GoogleBtn.svg"

export const Signin = () => {

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    window.location.href = '/oauth2/authorization/google';
  };

  return(
    <WaterWave imageUrl={LoginBackround} style={{ backgroundSize: 'cover' }}>
      {({ pause, play }) => (
              <Wrapper>
                <Container>
                <DivCenterContainter>
                <img src={GoogleSVG} alt="google"/>
                <button  onClick={handleGoogleLogin}>
                  <img src={GoogleBtn} alt="googleBtn"/>
                </button>
                  <section>
                <p>Don't have an account?</p>
                <span>Sign up</span>
                </section>
                </DivCenterContainter>
                </Container>
              </Wrapper>
            )}
    </WaterWave>
  )
}