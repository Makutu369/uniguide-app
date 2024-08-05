import { Link, ScrollArea, Separator } from "@radix-ui/themes";
import Spaceship from "../animations/spaceship";
import { useArchive } from "../../mainSchools/store/archived";
const Tracking = () => {
  const archive = useArchive((state) => state.archive);
  return (
    <div className="px-16 h-full">
      <div className="flex mt-6  text-base justify-between">
        <span>Tracking school list</span>
        <Link className="cursor-pointer hover:text-sky-400 active:bg-sky-400/40 transition-colors">
          view schools
        </Link>
      </div>
      <div className="mt-2 rounded-t-lg flex flex-col text-base h-full">
        <div className=" bg-[#1F1F1F] rounded-t-lg pr-3 text-white font-semibold items-center h-14 w-full flex justify-between px-2">
          <span>university</span>
          <Separator className="" orientation={"vertical"} size={3} />
          <span>region</span>
          <Separator className="" orientation={"vertical"} size={3} />
          <span>score</span>
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
          {archive.map((school) => (
            <div className="mb-2 flex px-3" key={school}>
              <div>{school}</div>
              <div></div>
              <div></div>
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
  );
};

export default Tracking;
