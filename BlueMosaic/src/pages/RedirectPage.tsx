import React, { useEffect } from 'react';
import { AuthApis } from "../hooks/useAuthQuery";
import { useNavigate } from "react-router-dom";
import { useStore } from 'zustand';
import { UserInfoStore } from '../stores/UserInfoStore';
import { UserApis } from '../hooks/useUserQuery';
import  axios from "axios"

const RedirectPage = () => {
  const navigate = useNavigate();
  const userInfo = useStore(UserInfoStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/user/me');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await AuthApis.signin();

        // const rawAccessToken = response.headers.get('Accesstoken');
        // const rawRefreshToken = response.headers.get('RefreshToken');

        // const accessToken = rawAccessToken ? rawAccessToken.replace(/^Bearer\s+/i, '') : null;
        // const refreshToken = rawRefreshToken ? rawRefreshToken.replace(/^Bearer\s+/i, '') : null;

        // localStorage.setItem('AccessToken', accessToken);
        // localStorage.setItem('RefreshToken', refreshToken);
        
        // if (accessToken) {
          //   navigate("/");
          // }
          const userId = await UserApis.getUserId();
          userInfo.setUserId(userId);
          navigate("/signup");
      } catch (error) {
        // 오류 처리 로직을 추가하세요.
        console.error('로그인 요청 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [navigate]);

  return <></>;
}

export default RedirectPage;
