import { ScrollArea } from "@radix-ui/themes";
import UniList from "./components/uniList";
import { useNavigate } from "react-router-dom";
import { SegmentedControl } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useSearch } from "./store/searchTerm";
import CourseList from "./components/CourseList";
import logo from "../../assets/logo1.svg";
import User from "../../components/User";
// import PieBasic from "./components/pie";
const Findschools = () => {
  const navigate = useNavigate();
  const setSearchTerm = useSearch((state) => state.setSearchTerm);
  const searchTerm = useSearch((state) => state.searchTerm);

  return (
    <div className="dark:text-white/80 text-black/80  font-boldm antialiased dark:bg-mainbackground bg-white flex flex-col  w-full">
      <div className="h-16 w-full border-b dark:border-white/15 dark:bg-graySecondary border-black/15 flex px-5 items-center justify-between gap-x-11">
        <Link to={`/dashboard`} className="flex gap-x-3 no-underline w-[30%]">
          <div className="w-8 h-8 flex items-center justify-normal">
            <img src={logo} alt="" />
          </div>
          <span className=" no-underline font-montserrat dark:text-white text-black self-center text-xl font-bold ">
            uniguide
          </span>
        </Link>
        <div className="flex-auto w-full md:w-[40%]">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            value={searchTerm}
            placeholder="search universities"
            className="input lg:h-[48px] h-11 bg-white dark:bg-graySecondary  border-primary/40 border-2 rounded-full w-full"
          />
        </div>
        <div className="hidden md:block">
          <User />
        </div>
      </div>
      <div className=" flex  ">
        <div className="w-[30%] max-w-[30%] hidden  sm:block flex-col ">
          <div className="w-full   border-r border-b px-5 dark:border-white/15  py-2 flex items-center min-h-14  h-14 ">
            <span className="mx-auto text-lg font-semibold">University</span>
          </div>
          <div className="flex-auto border-r border-black/15  dark:border-white/15">
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
          <div className="h-14 font-boldm border-b  dark:border-white/15 border-black/15 text-black  w-ful py-2 flex justify-center ">
            <SegmentedControl.Root
              defaultValue="inbox"
              radius="full"
              size="3"
              className="bg-graySecondary/40"
            >
              <SegmentedControl.Item
                value="alogrithm"
                className="cursor-pointer text-black dark:text-white font-montserrat"
                onClick={() => navigate("/user/universities/algorithm")}
              >
                Algorithm
              </SegmentedControl.Item>

              <SegmentedControl.Item
                value="ai"
                className="cursor-pointer grow text-black dark:text-white font-montserrat"
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
