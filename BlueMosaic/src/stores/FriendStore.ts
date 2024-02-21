import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface FriendInfo {
  friendId: number;
  friendName: string;
  profileImageUrl: string;
  setFriendId: (friendId: FriendInfo['friendId']) => void;
  setFriendName: (friendName: FriendInfo['friendName']) => void;
  setProfileImageUrl: (profileImageUrl: FriendInfo['profileImageUrl']) => void;
}

const createFriendInfoStore = (set) => ({
  friendId: 0,
  friendName: '',
  profileImageUrl: '',
  setFriendId: (friendId: number) => set({ friendId }),
  setFriendName: (friendName: string) => set({ friendName }),
  setProfileImageUrl: (profileImageUrl: string) => set({ profileImageUrl }),
});

let FriendInfoStoreTemp;

//devtools
if (import.meta.env.DEV) {
  FriendInfoStoreTemp = create<FriendInfo>()(devtools(createFriendInfoStore, { name: 'friendInfo' }));
} else {
  FriendInfoStoreTemp = create<FriendInfo>()(createFriendInfoStore);
}

export const FriendInfoStore = FriendInfoStoreTemp;