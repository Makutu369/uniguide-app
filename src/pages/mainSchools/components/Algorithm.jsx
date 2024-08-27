import { useEffect } from "react";
import { useCourse } from "../store/courses";
import { useData } from "../../dashboard/store/userData";
import { Progress } from "@radix-ui/themes";
const Algorithm = () => {
  const course = useCourse((state) => state.course);

  const { getDetails, Details } = useData();
  useEffect(() => {
    getDetails();
  }, [getDetails]);

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
      {course.map((course) => (
        <div
          key={course._id}
          className="w-full px-6 h-14 gap-y-9 border-b dark:border-white/5 border-black/5 flex items-center justify-between"
        >
          <div className="w-[40%] border-r  flex gap-x-3 cursor-pointer items-center border-black/15 dark:border-white/5 ">
            <span>{course.name}</span>
          </div>
          <span className="w-28">
            <Progress
              variant="soft"
              color={percentageColor(Number(Details.grade), course.cutoff)}
              value={percentage(Number(Details.grade), course.cutoff)}
            />
          </span>
          <span>{Number(course.cutoff)}</span>
        </div>
      ))}
    </>
  );
};

export default Algorithm;
