import { create } from "zustand";

const useBar = create((set) => ({
  bar: [],
  setBars: (value, grade) => {
    const renfined = value.map(({ name, cutoff }) => ({
      name,
      cutoff,
      grade,
    }));
    console.log(renfined);
    const filteredData = renfined.filter((item) => item.cutoff < grade);
    set({ bar: filteredData });
  },
}));

export { useBar };
