import { create } from "zustand";

const useArchive = create((set) => ({
  archive: [],
  setArchive: (value) =>
    set((state) => ({ archive: [...state.archive, value] })),
}));
export { useArchive };
