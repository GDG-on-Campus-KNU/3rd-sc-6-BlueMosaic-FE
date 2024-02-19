import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface FriendInfo {
  friendId: number;
  friendName: string;
  setFriendId: (friendId: FriendInfo['friendId']) => void;
  setFriendName: (friendName: FriendInfo['friendName']) => void;

}

const createFriendInfoStore = (set) => ({
  friendId: -1,
  friendName: '',
  setFriendId: (friendId: number) => set({ friendId }),
  setFriendName: (friendName: string) => set({ friendName }),
});

let FriendInfoStoreTemp;

//devtools
if (import.meta.env.DEV) {
  FriendInfoStoreTemp = create<FriendInfo>()(devtools(createFriendInfoStore, { name: 'friendInfo' }));
} else {
  FriendInfoStoreTemp = create<FriendInfo>()(createFriendInfoStore);
}

export const FriendInfoStore = FriendInfoStoreTemp;