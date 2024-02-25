import axios from 'axios';
import { UserInfoStore } from '../stores/UserInfoStore';

export const WasteApis = {
  instance: axios.create({
    baseURL: 'http://localhost:8080/waste',
    withCredentials: true,
  }),

  // 쓰레기 데이터 임시 생성하기
  create: async () => {
    try {
      const res = await WasteApis.instance.post('/temp-data', {
        "userId": UserInfoStore.getState().userId,
        "plastic": 10,
        "styrofoam": 4,
        "fiber": 1,
        "vinyl": 2,
        "generalWaste": 3
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
      const res = await WasteApis.instance.post('', formData);
      console.log("check",res);
      return res.data;
    } catch (error) {
      alert(`[Can't recognize] Please add a clearer picture`)
      throw error;
    }
  },
};
