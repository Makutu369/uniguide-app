import { Progress, ScrollArea } from "@radix-ui/themes";
import { useCourse } from "../store/courses";
import { useData } from "../../dashboard/store/userData";
import { useEffect } from "react";

const CourseList = () => {
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
  return (
    <>
      <div className="w-full h-14 border-b border-white/10 flex justify-between px-6 text-white/30 items-center">
        <span className="w-[40%] border-r border-white/10">course</span>
        <span>Eligiblity</span>
        <span>cutoff</span>
      </div>
      <ScrollArea
        type="hover"
        scrollbars="vertical"
        className="w-full h-screen"
      >
        {course.map((course) => (
          <div
            key={course._id}
            className="w-full px-6 h-14 gap-y-9 border-b border-white/5 flex items-center justify-between"
          >
            <span className="w-[40%] border-r border-white/5">
              {course.name}
            </span>
            <span className="w-28">
              <Progress
                variant="soft"
                color={percentageColor(Number(Details.grade), course.cutoff)}
                value={(Number(Details.grade) / course.cutoff) * 80}
              />
            </span>
            <span>{course.cutoff}</span>
          </div>
        ))}
      </ScrollArea>
    </>
  );
};

export default CourseList;
