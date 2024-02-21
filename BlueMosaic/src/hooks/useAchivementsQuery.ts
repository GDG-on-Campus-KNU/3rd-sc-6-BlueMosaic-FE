import axios from 'axios';
import { UserInfoStore } from '../stores/UserInfoStore';

export const AchievementsApis = {
  instance: axios.create({
    baseURL: 'http://localhost:8080/achievements',
    withCredentials: true,
  }),

    // 업적 조회
    get: async () => {
      try {
        const res = await AchievementsApis.instance.get(`/check/${UserInfoStore.getState().userId}`);
        console.log(res);
        return res.data;
      } catch (error) {
        console.error('Error fetching achievements:', error);
      
        // 500 오류가 발생하면 업데이트를 먼저 시도한 후 다시 조회
        await AchievementsApis.update();
        const updatedRes = await AchievementsApis.instance.get(`/check/${UserInfoStore.getState().userId}`);
        console.log(updatedRes);
        
        return updatedRes.data;
      }
    },

  // 업적 업데이트
  update: async () => {
    try {
      const res = await AchievementsApis.instance.post(`/update/${UserInfoStore.getState().userId}` );
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },
};