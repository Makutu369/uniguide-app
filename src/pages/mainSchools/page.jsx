import { ScrollArea } from "@radix-ui/themes";
import UniList from "./components/uniList";
import { useNavigate } from "react-router-dom";
import { SegmentedControl } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useSearch } from "./store/searchTerm";
import CourseList from "./components/CourseList";
import logo from "../../assets/logo1.svg";
// import PieBasic from "./components/pie";
const Findschools = () => {
  const navigate = useNavigate();
  const setSearchTerm = useSearch((state) => state.setSearchTerm);
  const searchTerm = useSearch((state) => state.searchTerm);
  return (
    <div className="text-white/80 text-white font-boldm antialiased bg-mainbackground flex flex-col  w-full">
      <div className="h-16 w-full border-b border-white/15 flex px-5 items-center justify-between">
        <Link to={`/dashboard`} className="flex gap-x-3 no-underline w-[30%]">
          <div className="w-8 h-8 flex items-center justify-normal">
            <img src={logo} alt="" />
          </div>
          <span className=" no-underline font-montserrat text-white self-center text-xl font-bold ">
            uniguide
          </span>
        </Link>
        <div className="flex-auto">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            value={searchTerm}
            placeholder="search universities"
            className="input h-11 input-bordered rounded-full w-full"
          />
        </div>
        <div className="w-[40%]"></div>
      </div>
      <div className="flex mb-11  ">
        <div className="w-[30%] max-w-[30%]   flex flex-col ">
          <div className="w-full bg-graySecondary border-r border-b px-5 border-white/15 py-2 flex items-center min-h-14  h-14 ">
            <span className="mx-auto text-lg font-semibold">University</span>
          </div>
          <div className="flex-auto border-r  border-white/15">
            {" "}
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
            <SegmentedControl.Root
              defaultValue="inbox"
              radius="full"
              size="3"
              className=""
            >
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
