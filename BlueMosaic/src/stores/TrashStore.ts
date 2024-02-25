import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface TrashInfo {
  plastic: number;
  styrofoam: number;
  fiber: number;
  vinyl: number;
  generalWaste: number;

  setPlastic: (plastic: TrashInfo['plastic']) => void;
  setStyrofoam: (styrofoam: TrashInfo['styrofoam']) => void;
  setFiber: (fiber: TrashInfo['fiber']) => void;
  setVinyl: (vinyl: TrashInfo['vinyl']) => void;
  setGeneralWaste: (generalWaste: TrashInfo['generalWaste']) => void;
}

const createTrashInfoStore = (set) => ({
  plastic: 0,
  styrofoam: 0,
  fiber: 0,
  vinyl: 0,
  generalWaste: 0,

  setPlastic: (plastic: TrashInfo['plastic']) => set({ plastic }),
  setStyrofoam: (styrofoam: TrashInfo['styrofoam']) => set({ styrofoam }),
  setFiber: (fiber: TrashInfo['fiber']) => set({ fiber }),
  setVinyl: (vinyl: TrashInfo['vinyl']) => set({ vinyl }),
  setGeneralWaste: (generalWaste: TrashInfo['generalWaste']) => set({ generalWaste })
});

let TrashInfoStoreTemp;

// devtools
if (import.meta.env.DEV) {
  TrashInfoStoreTemp = create<TrashInfo>()(devtools(createTrashInfoStore, { name: 'TrashInfo' }));
} else {
  TrashInfoStoreTemp = create<TrashInfo>()(createTrashInfoStore);
}

export const TrashInfoStore = TrashInfoStoreTemp;