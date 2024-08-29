import { useEffect } from "react";
import { useUniversities } from "../../../../store/sch_store";
import moreButton from "../../../assets/more.svg";
import link from "../../../assets/link.svg";
import { useSearch } from "../store/searchTerm";
import { DropdownMenu } from "@radix-ui/themes";
import { useCourse } from "../store/courses";
import { useArchive } from "../store/archived";
import { Skeleton } from "@nextui-org/react";

const UniList = () => {
  const setUniversities = useUniversities((state) => state.setSchools);
  const isLoading = useUniversities((state) => state.isLoading);
  const setArchive = useArchive((state) => state.setArchive);
  useEffect(() => {
    setUniversities();
  }, [setUniversities]);

  const universities = useUniversities((state) => state.schools);
  const searchTerm = useSearch((state) => state.searchTerm);

  const getCourseId = useCourse((state) => state.getCourseId);
  const fetchCourse = useCourse((state) => state.fetchCourse);

  const unifilter = universities.filter((university) =>
    university.school.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {unifilter.map((university) => (
        <div
          key={university._id}
          className=" flex cursor-pointer border-b py-9 justify-between dark:border-white/5 items-center px-5 h-11 hover:bg-primary/15 dark:hover:bg-graySecondary transition-all focus:bg-white/15"
          onClick={() => {
            getCourseId(university._id);
            fetchCourse();
          }}
        >
          {isLoading && <Skeleton className="w-full h-11"></Skeleton>}
          <span>{university.school}</span>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="w-4 h-2">
                <img src={moreButton} alt="" />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item
                onClick={() => {
                  setArchive(university);
                }}
              >
                track
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      ))}
    </>
  );
};

export default UniList;
