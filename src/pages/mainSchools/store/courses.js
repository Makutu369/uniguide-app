import { create } from "zustand";

const useCourse = create((set, get) => ({
  courseId: null,
  course: [],
  fetchCourse: async () => {
    const url = "http://localhost:5000/courses";
    const response = await fetch(`${url}/${get().courseId}`);
    const data = await response.json();
    set({ course: data });
  },
  getCourse: () => get().course,
  getCourseId: (value) => {
    set({ courseId: value });
    console.log("Course ID updated:", value);
  },
}));

export { useCourse };
