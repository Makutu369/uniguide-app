import { SegmentedControl } from "@radix-ui/themes";

const TopNav = () => {
  return (
    <>
      <div className="h-14 font-boldm border-b border-white/15 w-ful py-2 flex justify-center ">
        <SegmentedControl.Root defaultValue="inbox" radius="full" size="3">
          <SegmentedControl.Item value="inbox">Algorithm</SegmentedControl.Item>
          <SegmentedControl.Item value="drafts">
            <span className="self-center ">Ai</span>
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      </div>{" "}
    </>
  );
};

export default TopNav;
