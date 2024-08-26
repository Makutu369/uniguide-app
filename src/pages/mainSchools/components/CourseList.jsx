import { ScrollArea } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";

const CourseList = () => {
  return (
    <>
      <div className="w-full h-14 border-b text-primary border-black/10 dark:border-white/10 flex justify-between px-6  items-center">
        <span className="w-[40%] border-r border-white/10">course</span>
        <span>Eligiblity</span>
        <span>cutoff</span>
      </div>
      <ScrollArea
        type="always"
        scrollbars="vertical"
        className="w-full h-screen"
      >
        <Outlet />
      </ScrollArea>
    </>
  );
};

export default CourseList;
