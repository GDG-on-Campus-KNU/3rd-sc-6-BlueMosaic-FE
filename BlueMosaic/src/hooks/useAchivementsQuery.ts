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
      const res = await AchievementsApis.instance.post('/check/${userId: UserInfoStore.getState().userId}');
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching achievements:', error);
      const updatedRes = await AchievementsApis.update();
      console.log(updatedRes);

      return updatedRes.data;
    }
  },

  // 업적 업데이트
  update: async () => {
    try {
      const res = await AchievementsApis.instance.post('/update', { userId: UserInfoStore.getState().userId });
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },
};
