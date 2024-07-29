import { useEffect } from "react";
import { useUniversities } from "../../../../store/sch_store";
import moreButton from "../../../assets/more.svg";
import link from "../../../assets/link.svg";
import { DropdownMenu } from "@radix-ui/themes";
import { useCourse } from "../store/courses";

const UniList = () => {
  const universities = useUniversities((state) => state.schools);
  const setUniversities = useUniversities((state) => state.setSchools);
  useEffect(() => {
    setUniversities();
  }, [setUniversities]);

  const getCourseId = useCourse((state) => state.getCourseId);
  const fetchCourse = useCourse((state) => state.fetchCourse);

  return (
    <>
      {universities.map((university) => (
        <div
          key={university._id}
          className=" flex cursor-pointer border-b py-9 justify-between border-white/5 items-center px-5 h-11 hover:bg-white/20 focus:bg-white/15"
          onClick={() => {
            getCourseId(university._id);
            fetchCourse();
          }}
        >
          <span>{university.school}</span>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="w-4 h-2">
                <img src={moreButton} alt="" />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Favorite </DropdownMenu.Item>
              <DropdownMenu.Item className="flex justify-between">
                <span>Tour</span>
                <span className="w-4 h-4">
                  <img src={link} alt="" />
                </span>{" "}
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Archive</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      ))}
    </>
  );
};

export default UniList;
