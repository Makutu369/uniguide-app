import { Progress, ScrollArea } from "@radix-ui/themes";
import { useCourse } from "../store/courses";
import { useData } from "../../dashboard/store/userData";
import { useEffect } from "react";
import { useSearch } from "../store/searchTerm";
import Svg from "./svg";

const CourseList = () => {
  const course = useCourse((state) => state.course);
  const searchTerm = useSearch((state) => state.searchTerm);
  const { getDetails, Details } = useData();
  useEffect(() => {
    getDetails();
  }, [getDetails]);
  const courseFilter = course.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        type="always"
        scrollbars="vertical"
        className="w-full h-screen"
      >
        {courseFilter.map((course) => (
          <div
            key={course._id}
            className="w-full px-6 h-14 gap-y-9 border-b border-white/5 flex items-center justify-between"
          >
            <div className="w-[40%] border-r flex gap-x-3 cursor-pointer items-center border-white/5 ">
              <>
                <Svg courseId={course._id} />
              </>
              <span>{course.name}</span>
            </div>
            <span className="w-28">
              <Progress
                variant="soft"
                color={percentageColor(Number(Details.grade), course.cutoff)}
                value={24}
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
