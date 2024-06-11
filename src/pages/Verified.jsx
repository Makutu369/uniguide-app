import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Verified = () => {
  const location = useLocation();
  const queryparam = new URLSearchParams(location.search);
  const value = queryparam.get("q");
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://uniguide-back.onrender.com/verify-email?token=${value}`
      );
      const data = await response.json();
      console.log(data);
    })();
  }, [value]);
  return (
    <div className="h-screen flex justify-center items-center w-full bg-slate-950 text-2xl font-boldm font-extralight">
      <span>Verified </span>
    </div>
  );
};

export default Verified;
