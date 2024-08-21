import { useState } from "react";
import Navbar from "../../components/SignPage/Navbar";
import { useEffect } from "react";
import { Skeleton } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import HostelsList from "./components/listHostels";
const Acommodation = () => {
  const location = useLocation();
  const queryparam = new URLSearchParams(location.search);
  const value = queryparam.get("search");
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const body = { query: `hostels and hotels in ${value}` };
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
  const randData = [1, 2, 4, 5, 6, 3, 34, 3, 53, 2, 32, 23232];
  return (
    <div className="h-screen w-full font-boldm ">
      <Navbar />
      {/* <Map value={""} /> */}
      <div className="px-28">
        {isloading &&
          randData.map((data, index) => (
            <div
              key={index}
              className="mb-7 w-full flex justify-between gap-x-20  border-b border-white/15 pb-2"
            >
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-7 w-4/5 rounded-lg" />
                <Skeleton className="h-7 w-3/5 rounded-lg" />
                <Skeleton className="h-7 w-2/5 rounded-lg" />
                <Skeleton className="h-7 w-2/5 rounded-lg" />
              </div>
              <div>
                <Skeleton className="h-32 w-2/5 rounded-lg" />
              </div>
            </div>
          ))}
        <HostelsList data={data} />
      </div>
    </div>
  );
};

export default Acommodation;
