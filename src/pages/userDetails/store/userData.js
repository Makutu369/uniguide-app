import { create } from "zustand";

const useData = create((set) => ({
  userDetails: {},
  getDetails: (value) => set({ userDetails: value }),
}));

export { useData };
