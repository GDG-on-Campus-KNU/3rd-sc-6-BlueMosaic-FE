import axios from 'axios';
import { UserInfoStore } from '../stores/UserInfoStore';

const data = {
  "userId": 1,
}

export const RankingApis = {
  instance: axios.create({
    baseURL: 'http://localhost:8080/achievements',
    withCredentials: true,
  }),

    // 업적 조회
    get: async () => {
      try {
        const res = await RankingApis.instance.get(`/check/${UserInfoStore.getState().userId}`);
        console.log(res);
        return res.data;
      } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
      }
    },

  // 업적 업데이트
  update: async () => {
    try {
      const res = await RankingApis.instance.post(`/update/${UserInfoStore.getState().userId}` );
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },
};