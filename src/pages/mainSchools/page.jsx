import { ScrollArea, Separator } from "@radix-ui/themes";
import { SegmentedControl } from "@radix-ui/themes";
import Ai from "./animation/ai";

const Findschools = () => {
  return (
    <div className="text-white font-boldm antialiased bg-mainbackground flex h-screen w-full">
      <div className="w-[30%] h-full  flex flex-col ">
        <div className="w-full py-2 flex items-center  h-14 ">
          Choose your school
        </div>
        <div className="px-1">
          <Separator
            orientation="horizontal"
            className="w-full px-2"
            size={1}
          />
        </div>
        <div className="flex-auto">
          <ScrollArea
            type="always"
            scrollbars="vertical"
            className=""
          ></ScrollArea>
        </div>
        {/*  */}
      </div>

      {/* separation */}
      <div className="flex-auto ">
        <div className="h-14 font-boldm w-ful py-2 flex justify-center ">
          <SegmentedControl.Root defaultValue="inbox" radius="full" size="3">
            <SegmentedControl.Item value="inbox">
              Algorithm
            </SegmentedControl.Item>
            <SegmentedControl.Item value="drafts">
              <div className="flex gap-1">
                <span className="self-center ">Ai</span>
                <div className="w-9 h-9 border-white/20 border rounded-full">
                  <Ai />
                </div>
              </div>
            </SegmentedControl.Item>
          </SegmentedControl.Root>
        </div>{" "}
        <Separator orientation="horizontal" className="w-full px-2" size={1} />
      </div>
    </div>
  );
};

export default Findschools;
