import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface AchievementInfo {
  cleaner: string[];
  diver: string[];
  photographer: string[];
  pioneer: string[];
  select: number[]; // [Cleaner, Diver, Photographer, Pioneer] Index

  setCleaner: (cleaner: AchievementInfo['cleaner']) => void;
  setDiver: (diver: AchievementInfo['diver']) => void;
  setPhotographer: (photographer: AchievementInfo['photographer']) => void;
  setPioneer: (pioneer: AchievementInfo['pioneer']) => void;
  setSelect: (select: AchievementInfo['select']) => void;
  toggle: (index: number) => void;
}

const createAchievementInfoStore = (set) => ({
  cleaner: [""],
  diver: [""],
  photographer: [""],
  pioneer: [""],
  select: [0, 0, 0, 0], // 각 항목에 대한 인덱스

  setCleaner: (cleaner: AchievementInfo['cleaner']) => set({ cleaner }),
  setDiver: (diver: AchievementInfo['diver']) => set({ diver }),
  setPhotographer: (photographer: AchievementInfo['photographer']) => set({ photographer }),
  setPioneer: (pioneer: AchievementInfo['pioneer']) => set({ pioneer }),
  setSelect: (select: AchievementInfo['select']) => set({ select }),
  toggle: (index: number) => {
    set((state) => {
      const newSelect = [...state.select];
      const selected = newSelect.indexOf(index);
      newSelect[selected] = 1 - newSelect[selected];
      return { select: newSelect };
    });
  },
});

let AchievementInfoStoreTemp;

// devtools
if (import.meta.env.DEV) {
  AchievementInfoStoreTemp = create<AchievementInfo>()(devtools(createAchievementInfoStore, { name: 'AchievementInfo' }));
} else {
  AchievementInfoStoreTemp = create<AchievementInfo>()(createAchievementInfoStore);
}

export const AchievementInfoStore = AchievementInfoStoreTemp;
