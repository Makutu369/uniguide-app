import { ScrollArea, Separator } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import Spaceship from "../animations/spaceship";
import external_link from "./../../../assets/external_link.svg";
import { useArchive } from "../../mainSchools/store/archived";
import { useBar } from "../store/barData";
const Tracking = ({ grade }) => {
  const url = "https://uniguide-back.onrender.com";
  const archive = useArchive((state) => state.archive);
  const setBar = useBar((state) => state.setBars);
  const getCourseData = async (id) => {
    try {
      const response = await fetch(`${url}/courses/${id}`);
      const data = await response.json();
      setBar(data, grade);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="px-6 sm:px-16  h-full mt-6">
      <div className="flex flex-col gap-y-4 ">
        <div className="flex text-base h-[20%] justify-between">
          <span>Tracking school list</span>
          <Link
            to={"/user/universities"}
            className="cursor-pointer md:hidden hover:text-white/70  h-7 text-white/40 transition-all hover:border rounded-full border-white/5 px-3 hover:bg-graySecondary "
          >
            view schools
          </Link>
        </div>
        <div className=" rounded-t-lg flex flex-col text-base h-[300px] flex-auto">
          <div className=" bg-[#1F1F1F] rounded-t-lg pr-3 text-white font-semibold items-center h-14 w-full flex justify-between px-5">
            <span className="w-[20%]">university</span>
            <Separator className="" orientation={"vertical"} size={3} />
            <span>region</span>
          </div>
          <ScrollArea
            type="always"
            scrollbars="vertical"
            className="flex-auto border m-0 border-white/5"
          >
            {/* <div className="rounded-t-lg pr-3 text-white font-semibold items-center h-14 w-full flex justify-between px-2">
            <span>university</span>
            <Separator className="" orientation={"vertical"} size={3} />
            <span>university</span>
            <Separator className="" orientation={"vertical"} size={3} />
            <span>university</span>
          </div>
          */}
            {archive.map((university) => (
              <div
                className="mb-2 cursor-pointer active:bg-graySecondary transition-colors text-white/60 flex px-5 border-b items-center border-white/10 h-14 justify-between pr-3"
                key={university._id}
                onClick={() => getCourseData(university._id)}
              >
                <div className="w-[20%]">{university.school}</div>
                <Link
                  to={`/acommodation?search=${university.school}`}
                  className=" transition-colors group text-white/80 hover:text-white px-5 w-[20%] h-full flex justify-center items-center"
                >
                  <span className="group-hover:hidden text-white/40">
                    acommodation
                  </span>
                  <img
                    src={external_link}
                    alt={"external_link"}
                    className="hidden group-hover:block"
                  />
                </Link>
                <div>{university.region}</div>
              </div>
            ))}
            {archive.length <= 0 && (
              <div className="mt-4 grow flex flex-col justify-center items-center">
                <div>No School added yet </div>
                <div>
                  <Spaceship />
                </div>
              </div>
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
