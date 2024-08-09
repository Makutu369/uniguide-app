import { useEffect } from "react";
import { useSearch } from "../store/searchTerm";
import { useCourse } from "../store/courses";
import { useData } from "../../dashboard/store/userData";
import { Progress } from "@radix-ui/themes";
const Algorithm = () => {
  const searchTerm = useSearch((state) => state.searchTerm);
  const course = useCourse((state) => state.course);
  const courseFilter = course.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const { getDetails, Details } = useData();
  useEffect(() => {
    getDetails();
  }, [getDetails]);

  const sum = courseFilter.filter(
    (course) => Number(Details.grade) < course.cutoff
  ).length;

  const percentageColor = (grade, cutoff) => {
    const result =
      (grade / cutoff) * 80 < 30
        ? "green"
        : (grade / cutoff) * 80 < 60
        ? "yellow"
        : (grade / cutoff) * 80 > 80
        ? "crimson"
        : "green";
    return result;
  };
  const percentage = (grade, cutoff) => {
    return (grade / cutoff) * 80;
  };
  return (
    <>
      {courseFilter.map((course) => (
        <div
          key={course._id}
          className="w-full px-6 h-14 gap-y-9 border-b border-white/5 flex items-center justify-between"
        >
          <div className="w-[40%] border-r flex gap-x-3 cursor-pointer items-center border-white/5 ">
            <span>{course.name}</span>
          </div>
          <span className="w-28">
            <Progress
              variant="soft"
              color={percentageColor(Number(Details.grade), course.cutoff)}
              value={percentage(Number(Details.grade), course.cutoff)}
            />
          </span>
          <span>{course.cutoff}</span>
        </div>
      ))}
    </>
  );
};

export default Algorithm;
