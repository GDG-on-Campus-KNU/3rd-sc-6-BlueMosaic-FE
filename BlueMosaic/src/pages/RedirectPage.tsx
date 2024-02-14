import React, { useEffect } from 'react';
import { AuthApis } from "../hooks/useAuthQuery";
import { useNavigate } from "react-router-dom";

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AuthApis.signin();

        const rawAccessToken = response.headers.get('Accesstoken');
        const rawRefreshToken = response.headers.get('RefreshToken');

        const accessToken = rawAccessToken ? rawAccessToken.replace(/^Bearer\s+/i, '') : null;
        const refreshToken = rawRefreshToken ? rawRefreshToken.replace(/^Bearer\s+/i, '') : null;

        localStorage.setItem('AccessToken', accessToken);
        localStorage.setItem('RefreshToken', refreshToken);

        if (accessToken) {
          navigate("/");
        }
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
