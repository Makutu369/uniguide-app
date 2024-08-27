import { create } from "zustand";

const useSearchLocation = create((set, get) => ({
  searchLocation: "",
  setSearchLocation: (value) =>
    set({ searchLocation: String(value).toLowerCase() }),
}));

export { useSearchLocation };
