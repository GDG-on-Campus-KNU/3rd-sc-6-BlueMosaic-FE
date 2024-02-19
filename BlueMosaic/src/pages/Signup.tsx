import styled from "@emotion/styled/"
import { Wrapper, Container, DivContainer } from "../styles/Layout"
import Signupbackground from "../assets/SignupBackground.jpg"
import WaterWave from 'react-water-wave';
import GoogleSVG from "../assets/Google.svg"
import { InputForm } from "../components/common/InputForm";
import { useStore } from "zustand";
import { UserInfoStore } from "../stores/UserInfoStore"
import { useState } from "react";
import { UserApis } from "../hooks/useUserQuery";
import { useEffect } from "react"

export const Signup = () => {
  const userInfo = useStore(UserInfoStore);
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    switch(name){
      case "email": userInfo.setEmail(value); break;
      case "password": userInfo.setPassword(value); break;
      case "passwordConfirm": setPasswordConfirm(value); break;
      case "username": userInfo.setUsername(value); 
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await UserApis.get();
        userInfo.setEmail(userData.email);
        userInfo.setUserId(userData.id);
        userInfo.setUsername(userData.nickname);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchData(); 
  
  }, [userInfo]);

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    UserApis.changeNickName();
    // window.location.href = '/home';
  };

  return(
    <WaterWave imageUrl={Signupbackground} style={{ backgroundSize: 'cover' }}>
      {({ pause, play }) => (
              <Wrapper>
              <Container>
              <DivContainer>
              <img src={GoogleSVG} alt="google"/>

              {/* email */}
              {/* <InputForm title="Email" type="text" placeholder="Enter your Email" name="email" value={userInfo?.email} onChange={onChange} /> 

              <InputForm title="Password" type="password" placeholder="Enter your Password" name="password" value={userInfo?.password} onChange={onChange} /> 

              <InputForm title="Password Confirm" type="password" placeholder="Enter your Password Again" name="passwordConfirm" value={passwordConfirm} onChange={onChange} />  */}

              <InputForm title="Username" type="text" placeholder="Enter your username" name="username" value={userInfo?.username} onChange={onChange} /> 

                <button onClick={handleGoogleLogin}>
                  회원가입 완료
                </button>

              </DivContainer>
              </Container>
            </Wrapper>
            )}
    </WaterWave>
  )
}