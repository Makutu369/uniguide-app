import { useLocation } from "react-router-dom";

const Verified = () => {
  const location = useLocation();
  const queryparam = URLSearchParams(location.search);
  const value = queryparam.get("q");
  return (
    <div className="h-screen flex justify-center items-center w-full bg-slate-950 text-2xl font-boldm font-extralight">
      <span>Verified {value}</span>
    </div>
  );
};

export default Verified;
