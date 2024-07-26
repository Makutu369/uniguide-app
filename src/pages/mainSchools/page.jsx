import { ScrollArea } from "@radix-ui/themes";
import UniList from "./components/uniList";
import TopNav from "./components/topNav";
import CourseList from "./components/courseList";
import Logo from "../../assets/svgs/logo";
import { Link } from "react-router-dom";

const Findschools = () => {
  return (
    <div className="text-white/80 overflow-hidden  text-white font-boldm antialiased bg-mainbackground flex h-screen w-full">
      <div className="w-[30%] max-w-[30%] h-full  flex flex-col ">
        <div className="w-full border-r border-b px-5 border-white/15 py-2 flex items-center min-h-14  h-14 ">
          <Link to={"/dashboard"} className="w-32 h-11">
            <Logo />
          </Link>
        </div>
        <div className="flex-auto border-r border-white/15">
          {" "}
          <div className="flex  text-lg items-center  text-white h-14 bg-graySecondary justify-between px-5">
            <span className="">University</span>
            <span>Region</span>
          </div>
          <ScrollArea type="hover" scrollbars="vertical" className=" h-screen ">
            <UniList />
          </ScrollArea>
        </div>
        {/*  */}
      </div>

      {/* separation */}
      <div className="flex-auto ">
        <TopNav />
        <CourseList />
      </div>
    </div>
  );
};

export default Findschools;
