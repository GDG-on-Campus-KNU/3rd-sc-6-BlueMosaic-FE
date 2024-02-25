import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface TrashInfo {
  plastic: number;
  styrofoam: number;
  fiber: number;
  vinyl: number;
  generalWaste: number;

  score: number;
  totalScore: number;

  classes: string;

  setPlastic: (plastic: TrashInfo['plastic']) => void;
  setStyrofoam: (styrofoam: TrashInfo['styrofoam']) => void;
  setFiber: (fiber: TrashInfo['fiber']) => void;
  setVinyl: (vinyl: TrashInfo['vinyl']) => void;
  setGeneralWaste: (generalWaste: TrashInfo['generalWaste']) => void;
  setScore: (score: TrashInfo['score']) => void;
  setTotalScore: (totalScore: TrashInfo['totalScore']) => void;
  setClasses: (classes: TrashInfo['classes']) => void;

  update: (field: string, value: string) => void;
}

const createTrashInfoStore = (set) => ({
  plastic: 0,
  styrofoam: 0,
  fiber: 0,
  vinyl: 0,
  generalWaste: 0,
  score: 0,
  totalScore: 0,
  classes: '',

  setPlastic: (plastic: TrashInfo['plastic']) => set({ plastic }),
  setStyrofoam: (styrofoam: TrashInfo['styrofoam']) => set({ styrofoam }),
  setFiber: (fiber: TrashInfo['fiber']) => set({ fiber }),
  setVinyl: (vinyl: TrashInfo['vinyl']) => set({ vinyl }),
  setGeneralWaste: (generalWaste: TrashInfo['generalWaste']) => set({ generalWaste }),
  setScore: (score: TrashInfo['score']) => set({ score }),
  setTotalScore: (totalScore: TrashInfo['totalScore']) => set({ totalScore }),
  setClasses: (classes: string) => set({ classes }),

  update: (field, value) => set({ [field]: value }),
});

let TrashInfoStoreTemp;

// devtools
if (import.meta.env.DEV) {
  TrashInfoStoreTemp = create<TrashInfo>()(devtools(createTrashInfoStore, { name: 'TrashInfo' }));
} else {
  TrashInfoStoreTemp = create<TrashInfo>()(createTrashInfoStore);
}

export const TrashInfoStore = TrashInfoStoreTemp;
