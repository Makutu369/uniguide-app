import logo from "../../assets/logo1.svg";
import User from "../../components/User";
import notification from "../../assets/notification-icon.svg";
import Navlinks from "./components/navlinks";
import Tracking from "./components/Tracking";
import { useData } from "./store/userData";
import { useEffect } from "react";
import Pies from "./components/chart";
import Bars from "./components/bar";
import { useBar } from "./store/barData";

const Dashboard = () => {
  const bars = useBar((state) => state.bar);
  const circle = useBar((state) => state.circle);
  console.log(circle.total);
  const percentFail = (circle.worst / circle.total) * 100;
  const updated = [
    { name: "passed", value: 100 - percentFail },
    { name: "failed", value: percentFail },
  ];

  const { getDetails, Details } = useData();
  //nav links
  const links = [
    {
      name: "universities",
      route: "/user/universities",
    },
    {
      name: "tour",
      route: "/tour",
    },
  ];

  useEffect(() => {
    getDetails();
  }, [getDetails]);
  console.log(Details);
  return (
    <main className="font-boldm dark:bg-[#121212] bg-white text-black  antialiased w-full h-screen text-base overflow-auto dark:text-white/80">
      <div className="w-full border-b dark:border-white/15 px-6 md:px-16 dark:bg-graySecondary  border-black/15 flex text-lg items-center justify-between h-14">
        <div className="flex gap-x-3">
          <div className="h-8 w-8 flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          <span className="self-center font-montserrat text-xl font-bold">
            Uniguide
          </span>
        </div>

        <div className="hidden sm:flex gap-x-3 ">
          {links.map(({ name, route }, index) => (
            <Navlinks route={route} key={index}>
              {name}
            </Navlinks>
          ))}
        </div>
        <div className="gap-3 flex">
          <User />{" "}
          <div className="hidden  self-center grow h-11 rounded-xl w-14 border border-white/10 hover:border-white/15 justify-center items-center">
            <img className="h" src={notification} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-20 h-[100%]">
        <div className="h-[40%] ">
          <Tracking grade={Details.grade}></Tracking>
        </div>
        <div className="w-full flex flex-col lg:flex-row h-[50%] lg:gap-x-5 lg:justify-between px-5">
          <div className="w-[90%] lg:w-[30%]">
            <Pies pie={updated} />
          </div>
          <div className="w-[90%] ">
            <Bars bars={bars} />
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
