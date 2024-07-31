import Admisions from "./components/Admissions";
import User from "./components/User";
import logo from "../../assets/Graphic_Elements.svg";
import notification from "../../assets/notification-icon.svg";
import Navlinks from "./components/navlinks";
import Tracking from "./components/Tracking";
import Notifications from "./components/notifications";
import Example from "./components/chart";
import { useData } from "./store/userData";
import { useEffect } from "react";
const Dashboard = () => {
  const { getDetails, Details } = useData();
  useEffect(() => {
    getDetails();
  }, [getDetails]);
  console.log(Details);
  return (
    <main className="font-boldm bg-[#121212] antialiased w-full h-screen text-base overflow-auto text-white/80">
      <div className="w-full border-b border-white/15 px-16 flex text-lg items-center justify-between h-14">
        <div className="flex gap-x-3">
          <div className="h-11 w-11 flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          <span className="self-center font-montserrat text-xl font-bold">
            Uniguide
          </span>
        </div>

        <div className="flex gap-3">
          <Navlinks route={"/user/universities"}>universities</Navlinks>
          <Navlinks route={"/tour"}>Take a tour</Navlinks>
          <Navlinks></Navlinks>
        </div>
        <div className=" gap-3 flex">
          <User />{" "}
          <div className="flex self-center grow h-11 rounded-xl w-14 border border-white/10 hover:border-white/15 justify-center items-center">
            <img className="h" src={notification} alt="" />
          </div>
        </div>
      </div>
      <div className="h-[90%]">
        <div className=" w-full my-6 h-[80%] flex gap-2  text-2xl px-16">
          <div className="h-full  w-[80%]">
            <div>
              <span className="">welcome back</span>{" "}
              <span className="text-white">{Details.lastName}</span>
              <div className="text-base text-white/50">
                your Dashboard is here
              </div>
            </div>
            <div className="mt-4  flex h-[70%] ">
              <div className=" p-5 w-[400px] rounded-lg bg-[#1F1F1F] gap-y-3 flex flex-col">
                <div className="p-3">
                  <span className="text-white block text-xl font-semibold">
                    Statistic
                  </span>
                  <span className="text-base text-white/40">
                    All school statistic
                  </span>
                </div>
                <Admisions
                  color="bg-green-400"
                  percentage={"15.6%"}
                  number={56}
                  closed={"open"}
                />
                <Admisions
                  color="bg-red-400"
                  percentage={"56.8%"}
                  number={12}
                  closed={"Closed"}
                />
              </div>
              <div className=" text-base h-full ml-4 w-[90%] border border-white/20 bg-[#1F1F1F] rounded-xl">
                <Example />
              </div>
            </div>
          </div>
          <Notifications />
        </div>
        <Tracking></Tracking>
      </div>
    </main>
  );
};

export default Dashboard;
