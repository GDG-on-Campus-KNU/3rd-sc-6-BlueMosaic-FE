import axios from 'axios';
import { FriendInfoStore } from '../stores/FriendStore';
import { UserInfoStore } from '../stores/UserInfoStore';

export const FriendApis = {
  instance: axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
  }),

  // 친구추가 userId - friendUserId
  add: async () => {
    try {
      console.log("sending");
      const res = await FriendApis.instance.post(
        '/friends',  { userId: UserInfoStore.getState().userId, friendUserId: FriendInfoStore.getState().friendId } );
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },

  // 친구 찾기
  find: async () => {
    try {
      const res = await FriendApis.instance.get(
        `/friends/${UserInfoStore.getState().userId}`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },

  // 친구 삭제
  delete: async () => {
    try {
      const res = await FriendApis.instance.delete(
        `/friends/${FriendInfoStore.getState().friendId}`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },

};