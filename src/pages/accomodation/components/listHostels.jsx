import { Accordion, AccordionItem } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import Map from "../Map";
import ListData from "./dataList";

const HostelsList = ({ data }) => {
  console.log(data);
  return (
    <Accordion>
      {data.map((item, index) => (
        <AccordionItem
          className=" border-b border-black/20 dark:border-white/15"
          key={index}
          title={
            <div className="flex justify-between">
              <span className="text-black dark:text-white/70  font-semibold">
                {item.name}
              </span>
              <div className="flex gap-x-2 flex-wrap">
                {item.tags.map((chip, index) => {
                  if (index > 2) return;
                  return (
                    <Chip
                      className="dark:text-white text-black/70"
                      key={index}
                      variant="dot"
                      color="primary"
                    >
                      {chip}
                    </Chip>
                  );
                })}
              </div>
            </div>
          }
          subtitle={""}
        >
          <div className="flex   flex-col w-full md:flex-row  justify-between gap-y-2">
            <ListData data={item} />
            <Map value={item.name} />
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default HostelsList;
