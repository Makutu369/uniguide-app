import { create } from "zustand";

const useSearchLocation = create((set, get) => ({
  searchLocation: "",
  updatedSearch: [],

  setSearchLocation: (value) =>
    set({ searchLocation: String(value).toLowerCase() }),
}));

export { useSearchLocation };
