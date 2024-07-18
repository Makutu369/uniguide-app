import { create } from "zustand";
import { trackCourses } from "../lib/trackData";

const courseStore = create((set) => ({
  course: "",
  trackCourses,
  courses: [],
  setCourse: (value) => {
    set({ course: value });
    set((state) => ({ courses: state.trackCourses[`${value}`] }));
  },
}));

export { courseStore };
