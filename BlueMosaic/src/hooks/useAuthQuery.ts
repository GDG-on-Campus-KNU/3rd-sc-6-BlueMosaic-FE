import axios,{ AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { UserInfo } from '../stores/UserInfoStore';
import { useQuery } from '@tanstack/react-query';

export const AuthApis = {
  instance: axios.create({
    baseURL: "http://localhost:8080/",
    withCredentials: true,
  }),

  ranking: async () => {
    try{
      const response = await AuthApis.instance.get('/ranking/test-making-data');
      console.log(response);
    } catch(err){
     console.error(err); 
    }
  },

  signup: async (userInfo:UserInfo, passwordConfirm: string, authCode: string) => {
    try {
      const response = await AuthApis.instance.post('/signup', {
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
        passwordConfirm: passwordConfirm,
        authCode: authCode
      });
      const data = response.data;

      return data;
    } catch (error) {
      console.error("API 통신 에러:", error);
    }
  },


  signin: async () => {
    try {
      const response = await AuthApis.instance.post('/oauth2/authorization/google', {
      });
      const data = response.data;

      return data;
    } catch (error) {
      return null;
    }
  },

  //refreshToken
  setupInterceptors: () => {
    AuthApis.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = localStorage.getItem('refreshToken');
            // 재발급받는 경로
            const response = await AuthApis.instance.get('/hello', {
              headers: {Refreshtoken : `Bearer ${localStorage.getItem('Refreshtoken')}`}
            });

            const rawAccessToken = response.headers.get('Accesstoken');
            const rawRefreshToken = response.headers.get('Refreshtoken');
      
            const newAccesstoken = rawAccessToken ? rawAccessToken.replace(/^Bearer\s+/i, '') : null;
            const newRefreshtoken = rawRefreshToken ? rawRefreshToken.replace(/^Bearer\s+/i, '') : null;
            
            // console.log(`토큰 갱신\n newAccesstoken:${newAccesstoken}\n newRefreshtoken:${newRefreshtoken}`)

            localStorage.setItem('Accesstoken',newAccesstoken);
            localStorage.setItem('Refreshtoken',newRefreshtoken);

            originalRequest.headers['Authorization'] = `Bearer ${newAccesstoken}`;

            return AuthApis.instance(originalRequest);
          } catch (refreshError) {
            console.error("토큰 갱신 실패", refreshError);
            localStorage.removeItem('Accesstoken');
            localStorage.removeItem('Refreshtoken');
            window.location.href = '/signin';
          }
        }

        return Promise.reject(error);
      }
    );
  },


  // 리팩토링용 코드
  fetchData: async (endpoint: string, type: string, data?: any) => {
    let response;
  
    switch (type) {
      case 'get':
        response = await AuthApis.instance.get(`http://localhost:8001/user-service/${endpoint}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}` },
        });
        break;

      case 'post':
        response = await AuthApis.instance.post(`http://localhost:8001/user-service/${endpoint}`, data, {
          headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}` },
        });
        break;

      default:
        console.error("Invalid type:", type);
    }
  
    return response;
  },
  
};