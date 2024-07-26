import { create } from "zustand";

const useData = create((set) => ({
  Details: {},
  getDetails: async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://uniguide-back.onrender.com/user/details",
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      set({ Details: data });
    }
  },
}));

export { useData };
