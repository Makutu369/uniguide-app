import { set } from "zod";
import { create } from "zustand";

const usePass = create(() => ({
  result: {},
  postPass: async (passValue, token) => {
    try {
      const response = await fetch(
        "http://localhost:5000/user/reset-password/confirm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pass: passValue, // use passValue instead of get().pass
            token: token,
          }),
        }
      );
      const data = await response.json();
      set({ result: data });
      console.log(token);
      console.log(passValue);
      console.log(data);
    } catch (error) {
      set({ result: { error: error.message } });
    }
  },
}));

export { usePass };
