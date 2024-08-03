import { ScrollArea } from "@radix-ui/themes";
import UniList from "./components/uniList";
import { useNavigate } from "react-router-dom";
import { SegmentedControl } from "@radix-ui/themes";
import arrow from "../../assets/arrow-right.svg";
import { useSearch } from "./store/searchTerm";
import Navbar from "../../components/SignPage/Navbar";
import CourseList from "./components/CourseList";
// import PieBasic from "./components/pie";
const Findschools = () => {
  const navigate = useNavigate();
  const setSearchTerm = useSearch((state) => state.setSearchTerm);
  const searchTerm = useSearch((state) => state.searchTerm);
  return (
    <div className="text-white/80 text-white font-boldm antialiased bg-mainbackground flex flex-col  w-full">
      <Navbar route={"/dashboard"} />
      <div className="flex h-[30%]">
        {/* <PieBasic /> */}
        <div className="flex flex-col w-[40%]  mx-5 bg-violet-400/15 p-5 my-9 rounded-lg">
          <span className="text-lg text-white font-semibold">
            Search every university here
          </span>
          <span className="text-white/50">
            type the name of the school you want to search here and you will see
            it
          </span>
          <div className="flex gap-4 my-5 group">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              value={searchTerm}
              className="input input-bordered rounded-full w-full"
            />
            <div className="self-center rounded-full  p-1 border-white/15 border group-hover:bg-white/25  transition-colors">
              <img src={arrow} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 flex mb-11  rounded border border-white/15">
        <div className="w-[30%] max-w-[30%] h-full  flex flex-col ">
          <div className="w-full border-r border-b px-5 border-white/15 py-2 flex items-center min-h-14  h-14 ">
            <span className="mx-auto text-lg font-semibold">University</span>
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
          <div className="h-14 font-boldm border-b border-white/15 w-ful py-2 flex justify-center ">
            <SegmentedControl.Root defaultValue="inbox" radius="full" size="3">
              <SegmentedControl.Item
                value="alogrithm"
                className="cursor-pointer"
                onClick={() => navigate("/user/universities/algorithm")}
              >
                Algorithm
              </SegmentedControl.Item>

              <SegmentedControl.Item
                value="ai"
                className="cursor-pointer grow"
                onClick={() => navigate("/user/universities/ai")}
              >
                Ai
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          </div>
          <CourseList />
        </div>
      </div>
    </div>
  );
};

export default Findschools;
