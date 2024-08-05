import { create } from "zustand";

const useUniversities = create((set) => {
  return {
    schools: [],
    isLoading: false,
    isError: false,
    setSchools: async () => {
      set({ isLoading: true });
      try {
        const response = await fetch(
          "https://uniguide-back.onrender.com/universities"
        );
        set({ isLoading: false });
        const data = await response.json();
        set({ schools: [...data] });
      } catch (err) {
        set({ isError: true });
        set({ isLoading: false });
      }
    },
  };
});

export { useUniversities };
