import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface UserInfo {
  userId: number;
  email: string;
  password: string;
  username: string;
  setUserId: (userId: UserInfo['userId']) => void;
  setEmail: (email: UserInfo['email']) => void;
  setPassword: (password: UserInfo['password']) => void;
  setUsername: (username: UserInfo['username']) => void;
}

const createUserInfoStore = (set) => ({
  userId: -1,
  email: '',
  password: '',
  username: '',
  setUserId: (userId: number) => set({ userId }),
  setEmail: (email: string) => set({ email }),
  setPassword: (password: string) => set({ password }),
  setUsername: (username: string) => set({ username }),
});

let userInfoStoreTemp;

//devtools
if (import.meta.env.DEV) {
  userInfoStoreTemp = create<UserInfo>()(devtools(createUserInfoStore, { name: 'userInfo' }));
} else {
  userInfoStoreTemp = create<UserInfo>()(createUserInfoStore);
}

export const UserInfoStore = userInfoStoreTemp;