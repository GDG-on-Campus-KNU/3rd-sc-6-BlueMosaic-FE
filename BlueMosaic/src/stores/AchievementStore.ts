import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface AchievementInfo {
  cleaner: string[];
  diver: string[];
  photographer: string[];
  pioneer: string[];

  setCleaner: (cleaner: AchievementInfo['cleaner']) => void;
  setDiver: (diver: AchievementInfo['diver']) => void;
  setPhotographer: (photographer: AchievementInfo['photographer']) => void;
  setPioneer: (pioneer: AchievementInfo['pioneer']) => void;
}

const createAchievementInfoStore = (set) => ({
  cleaner: [""],
  diver: [""],
  photographer: [""],
  pioneer: [""],

  setCleaner: (cleaner: AchievementInfo['cleaner']) => set({ cleaner }),
  setDiver: (diver: AchievementInfo['diver']) => set({ diver }),
  setPhotographer: (photographer: AchievementInfo['photographer']) => set({ photographer }),
  setPioneer: (pioneer: AchievementInfo['pioneer']) => set({ pioneer }),
});

let AchievementInfoStoreTemp;

//devtools
if (import.meta.env.DEV) {
  AchievementInfoStoreTemp = create<AchievementInfo>()(devtools(createAchievementInfoStore, { name: 'AchievementInfo' }));
} else {
  AchievementInfoStoreTemp = create<AchievementInfo>()(createAchievementInfoStore);
}

export const AchievementInfoStore = AchievementInfoStoreTemp;