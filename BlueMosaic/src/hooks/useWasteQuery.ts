import axios from 'axios';
import { UserInfoStore } from '../stores/UserInfoStore';

export const WasteApis = {
  instance: axios.create({
    baseURL: 'http://localhost:8080/Wastes',
    withCredentials: true,
  }),

  // 쓰레기 데이터 임시 생성하기
  create: async () => {
    try {
      const res = await WasteApis.instance.post('/create', {
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
      console.error('Error fetching Wastes:', error);
    }
  },

  // 획득한 점수 확인하기
  get: async () => {
    try {
      const res = await WasteApis.instance.post('/idenify', { userId: UserInfoStore.getState().userId,
      fileid: 1 });
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },
};
