import axios from 'axios';
import { UserInfoStore } from '../stores/UserInfoStore';

export const WasteApis = {
  instance: axios.create({
    baseURL: 'http://localhost:8080/marine',
    withCredentials: true,
  }),

  // 쓰레기 데이터 임시 생성하기
  create: async () => {
    try {
      const res = await WasteApis.instance.post('/temp-data', {
        "marineLifeId": 0,
        "userId": 0,
        "name": "string",
        "latitude": 0,
        "longitude": 0
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching wastes:', error);
    }
  },

  // 업로드하고 획득한 점수 확인하기
  get: async (formData: FormData) => {
    try {
      const res = await WasteApis.instance.put('', formData);
      console.log(res);
      return res.data;
    } catch (error) {
      alert(`[Can't recognize] Please add a clearer picture`)
      throw error;
    }
  },

    // 주어진 ID의 해양 생물 정보를 수정
    update: async () => {
      try {
        const res = await WasteApis.instance.put('',{
          "marineLifeId": 0,
          "userId": 0,
          "name": "string",
          "latitude": 0,
          "longitude": 0
        });
        console.log(res);
        return res.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

  // 사용자가 모은 해양 생물 정보를 조회
  getCollection: async () => {
    try {
      const res = await WasteApis.instance.get(`/retrieve${UserInfoStore.getState().userId}`);
      console.log(res);
      return res.data;
    } catch (error) {
      alert(`[Can't recognize] Please add `)
      throw error;
    }
  },  
};
