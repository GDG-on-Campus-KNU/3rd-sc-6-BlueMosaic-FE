import axios from 'axios';
import { UserInfoStore } from '../stores/UserInfoStore';

export const ExchangeApis = {
  instance: axios.create({
    baseURL: 'http://localhost:8080/exchanges',
    withCredentials: true,
  }),


  // 업적 조회
  exchange: async (receiverUserId="2", imageId) => {
    try {
      const res = await ExchangeApis.instance.post('', { senderUserId: UserInfoStore.getState().userId, receiverUserId: receiverUserId, imageId: imageId });
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching exchange:', error);
    }
  },
};
