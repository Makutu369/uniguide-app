import { Link, ScrollArea, Separator } from "@radix-ui/themes";
import Spaceship from "../spaceship";
const Tracking = () => {
  const isSchool = true;
  return (
    <div className="px-16">
      <div className="flex mt-6  text-base justify-between">
        <span>Tracking school list</span>
        <Link className="cursor-pointer hover:text-sky-400 active:bg-sky-400/40 transition-colors">
          view schools
        </Link>
      </div>
      <div className="mt-2 rounded-t-lg text-base">
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
          className="h-64 border m-0 border-white/5"
        >
          {/* <div className="rounded-t-lg pr-3 text-white font-semibold items-center h-14 w-full flex justify-between px-2">
            <span>university</span>
            <Separator className="" orientation={"vertical"} size={3} />
            <span>university</span>
            <Separator className="" orientation={"vertical"} size={3} />
            <span>university</span>
          </div>
          */}
          {isSchool && (
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
