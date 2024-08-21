import { Accordion, AccordionItem } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import Map from "../Map";
import ListData from "./dataList";

const HostelsList = ({ data }) => {
  data.shift();
  console.log(data);
  return (
    <Accordion>
      {data.map((item, index) => (
        <AccordionItem
          className=""
          key={index}
          title={
            <div className="flex justify-between">
              <span>{item.name}</span>
              <div className="flex gap-x-2">
                {item.tags.map((chip, index) => (
                  <Chip key={index} variant="dot">
                    {chip}
                  </Chip>
                ))}
              </div>
            </div>
          }
          subtitle={""}
        >
          <div className="flex w-full justify-between">
            <ListData data={item} />
            <Map value={item.name} />
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default HostelsList;
