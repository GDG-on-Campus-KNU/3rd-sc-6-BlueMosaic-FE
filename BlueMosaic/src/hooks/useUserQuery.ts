import axios from 'axios';
import { UserInfoStore } from '../stores/UserInfoStore';

const data = {
  "id": UserInfoStore.getState().userId,
  "nickname": UserInfoStore.getState().username,
  "name": "string"
}

export const UserApis = {
  instance: axios.create({
    baseURL: 'http://localhost:8080/user',
    withCredentials: true,
  }),

    // 유저 정보 수정
    changeNickName: async () => {
      try {
        console.log(data);
        const res = await UserApis.instance.put("", {
          "id": UserInfoStore.getState().userId,
          "nickname": UserInfoStore.getState().username,
          "name": "string"
        } );
        console.log(res);
        return res.data;
      } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
      }
    },

  // 본인 userId 조회
  getUserId: async () => {
    try {
      const res = await UserApis.instance.get(`/me`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      return error;
      // throw error;
    }
  },

  // 유저 정보 조회
  get: async () => {
    try {
      const res = await UserApis.instance.get(`/${data.id}`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },
  
  // 닉네임으로 유저 검색
  search: async (searchValue: string) => {
    try {
      const res = await UserApis.instance.get(`/search/${searchValue}`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },
};