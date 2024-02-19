import axios from 'axios';

const data = {
  "id": 1,
  "nickname": "string",
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
        const res = await UserApis.instance.put("/", data );
        console.log(res);
        return res.data;
      } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
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
  search: async () => {
    try {
      const res = await UserApis.instance.get(`/search/${data.nickname}`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },
};