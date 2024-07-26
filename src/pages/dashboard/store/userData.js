import { create } from "zustand";

const useData = create((set) => ({
  Details: {},
  getDetails: async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/user/details", {
      headers: {
        "x-auth-token": token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      set({ Details: data });
    }
  },
}));

export { useData };
