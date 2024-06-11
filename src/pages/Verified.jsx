import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Verified = () => {
  const location = useLocation();
  const queryparam = new URLSearchParams(location.search);
  const value = queryparam.get("q");
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://uniguide-back.onrender.com/verify-email?q=${value}`
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    })();
  }, [value]);
  return (
    <div className="h-screen flex justify-center items-center w-full bg-slate-950 text-2xl font-boldm font-extralight">
      <span>Verified {data.message}</span>
    </div>
  );
};

export default Verified;
