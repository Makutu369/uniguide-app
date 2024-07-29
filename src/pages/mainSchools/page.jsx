import { ScrollArea } from "@radix-ui/themes";
import UniList from "./components/uniList";
import TopNav from "./components/topNav";
import CourseList from "./components/courseList";
import arrow from "../../assets/arrow-right.svg";
import { useSearch } from "./store/searchTerm";
const Findschools = () => {
  const setSearchTerm = useSearch((state) => state.setSearchTerm);
  const searchTerm = useSearch((state) => state.searchTerm);
  return (
    <div className="text-white/80   text-white font-boldm antialiased bg-mainbackground flex flex-col  w-full">
      <div className="w-full h-14 border-b border-white/15">hello</div>
      <div className="mx-auto flex gap-4 my-5 group">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          value={searchTerm}
          className="input input-bordered rounded-full"
        />
        <div className="self-center rounded-full  p-1 border-white/15 border group-hover:bg-white/25  transition-colors">
          <img src={arrow} alt="" className="" />
        </div>
      </div>
      <div className="mx-5 flex mb-11  rounded border border-white/15">
        <div className="w-[30%] max-w-[30%] h-full  flex flex-col ">
          <div className="w-full border-r border-b px-5 border-white/15 py-2 flex items-center min-h-14  h-14 ">
            <span>hello</span>
          </div>
          <div className="flex-auto border-r border-white/15">
            {" "}
            <div className="flex  text-lg items-center  text-white h-14 bg-graySecondary justify-between px-5">
              <span className="">University</span>
              <span>Region</span>
            </div>
            <ScrollArea
              type="hover"
              scrollbars="vertical"
              className=" h-screen "
            >
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
    </div>
  );
};

export default Findschools;
