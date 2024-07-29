import { create } from "zustand";

const useSearch = create((set) => ({
  searchTerm: "",
  setSearchTerm: (value) => set({ searchTerm: value }),
}));

export { useSearch };
