import create from "zustand";

type BattlemapState = {
  battlemapUrl: string;
  selectBattlemap: (url: string) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useBattlemapStore = create<BattlemapState>((set) => ({
  battlemapUrl: "",
  selectBattlemap: (url: string) => set({ battlemapUrl: url }),
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false })
}));
