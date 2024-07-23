import Logo from "../../assets/svgs/logo";
import Admisions from "./components/Admissions";
import User from "./components/User";
import { Separator } from "@radix-ui/themes";
import notification from "../../assets/notification-icon.svg";
import Navlinks from "./components/navlinks";
import Tracking from "./components/Tracking";
import Notifications from "./components/notifications";
import Example from "./components/chart";
const Dashboard = () => {
  return (
    <main className="font-boldm bg-[#121212] antialiased w-full h-screen text-base overflow-auto text-white/80">
      <div className="w-full px-16 flex text-lg items-center justify-between h-[10%]">
        <div className="h-16 w-32 mt-3 self-center">
          <Logo />
        </div>
        <div className="flex gap-14">
          <Navlinks>search Schools</Navlinks>
          <Navlinks></Navlinks>
          <Navlinks></Navlinks>
        </div>
        <div className=" gap-3 flex">
          <User />{" "}
          <div className="flex self-center grow h-14 rounded-xl w-14 border border-white/20 justify-center items-center">
            <img className="h" src={notification} alt="" />
          </div>
        </div>
      </div>
      <div className="px-16">
        <Separator className="w-full" />
      </div>

      <div className="h-[90%]">
        <div className=" w-full my-6 h-[80%] flex gap-2  text-2xl px-16">
          <div className="h-full  w-[80%]">
            <div>
              <span className="">welcome back</span>{" "}
              <span className="text-white">Makutu</span>
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
              <div className=" text-base h-full ml-4 w-[90%] border border-white/20 rounded-xl">
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
