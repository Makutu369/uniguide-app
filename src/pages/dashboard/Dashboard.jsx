import User from "./components/User";
import logo from "../../assets/logo1.svg";
import notification from "../../assets/notification-icon.svg";
import Navlinks from "./components/navlinks";
import Tracking from "./components/Tracking";
import { useData } from "./store/userData";
import { useEffect } from "react";
import Pies from "./components/chart";
import Bars from "./components/bar";
const Dashboard = () => {
  const { getDetails, Details } = useData();
  useEffect(() => {
    getDetails();
  }, [getDetails]);
  console.log(Details);
  return (
    <main className="font-boldm bg-[#121212] antialiased w-full h-screen text-base overflow-auto text-white/80">
      <div className="w-full border-b border-white/15 px-6 md:px-16  flex text-lg items-center justify-between h-14">
        <div className="flex gap-x-3">
          <div className="h-8 w-8 flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          <span className="self-center font-montserrat text-xl font-bold">
            Uniguide
          </span>
        </div>

        <div className="hidden sm:block gap-x-3">
          <Navlinks route={"/user/universities"}>universities</Navlinks>
          <Navlinks route={"/tour"}>Take a tour</Navlinks>
          <Navlinks></Navlinks>
        </div>
        <div className="gap-3 flex">
          <User />{" "}
          <div className="hidden sm:block self-center grow h-11 rounded-xl w-14 border border-white/10 hover:border-white/15 justify-center items-center">
            <img className="h" src={notification} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-20 h-[100%]">
        <div className="h-[40%] ">
          <Tracking></Tracking>
        </div>
        <div className="w-full flex flex-col lg:flex-row   h-[50%] gap-x-5 justify-between px-5">
          <div className="w-[90%] lg:w-[30%]">
            <Pies />
          </div>
          <div className="w-[90%]">
            <Bars />
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
