import { useState } from "react";
import Navbar from "../../components/SignPage/Navbar";
import { useEffect } from "react";
import { Skeleton } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import HostelsList from "./components/listHostels";
import User from "../../components/User";
import Animate from "./animation/location";
import { useSearchLocation } from "./store/search";
const Acommodation = () => {
  const location = useLocation();
  const queryparam = new URLSearchParams(location.search);
  const value = queryparam.get("search");
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const body = { query: `hostels and hotels in ${value}` };
  const { searchLocation, setSearchLocation } = useSearchLocation();
  useEffect(() => {
    // fetch data with value
    const fetchRequest = async () => {
      setIsloading(true);
      try {
        const response = await fetch(
          "https://locations-scraper.onrender.com/locations",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setIsloading(false);
          setData(data);
        }
        setIsloading(false);
      } catch (error) {
        setIsloading(false);
      }
    };
    fetchRequest();
  }, []);
  data.shift();
  const searched = data.filter((item, index) => {
    return String(item.name).toLowerCase().includes(searchLocation);
  });
  const randData = [1, 2, 4, 5, 6, 3, 34, 3, 53, 2, 32, 23232];
  return (
    <div className="h-screen w-full font-boldm dark:bg-mainbackground relative ">
      <Navbar route={"/dashboard"} tour={"hidden"}>
        <User />
      </Navbar>
      {/* <Map value={""} /> */}{" "}
      <div className="lg:px-28 text-black dark:text-white dark:bg-mainbackground md:px-14 px-3 flex bg-white dark:bg-graySecondary flex-col gap-y-14 pt-5 ">
        {" "}
        <div className="w-full flex justify-between items-center">
          <div className="w-[70%]">
            <span className="font-montserrat font-semibold ">{value}</span>
            <input
              type="text "
              className="md:w-full bg-gray-100 mt-4 dark:bg-graySecondary border-primary sticky top-3 z-30 h-14 dark:text-white text-black self-center px-7 input dark:border-white/20 bg-graySecondary/50 o backdrop-blur-md rounded-full block grow "
              onChange={(e) => {
                setSearchLocation(e.target.value);
              }}
              value={searchLocation}
              placeholder="search acommodation"
            />{" "}
          </div>
          <div className="w-32 h-32 border border-black/20 dark:border-white/20 rounded-full bg-primary/70 dark:bg-primary/15">
            <Animate />
          </div>
        </div>
        {isloading &&
          randData.map((data, index) => (
            <div
              key={index}
              className="mb-7 w-full flex justify-between gap-x-20  border-b border-white/15 pb-2"
            >
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-7 w-4/5 rounded-lg" />
                <Skeleton className="h-7 w-3/5 rounded-lg " />
                <Skeleton className="h-7 w-2/5 rounded-lg" />
                <Skeleton className="h-7 w-2/5 rounded-lg" />
              </div>
              <div>
                <Skeleton className="h-32 w-2/5 rounded-lg" />
              </div>
            </div>
          ))}
        <HostelsList data={searched} />
      </div>
    </div>
  );
};

export default Acommodation;
