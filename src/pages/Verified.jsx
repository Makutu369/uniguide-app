import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Verified = () => {
  const location = useLocation();
  const queryparam = new URLSearchParams(location.search);
  const value = queryparam.get("q");
  const [result, setResult] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://uniguide-back.onrender.com/user/verifyEmail?token=${value}`
        );
        if (response.status(!200)) {
          setResult("user not verified");
          return;
        }
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.log("there was an error :", e);
      }
    })();
  }, [value]);
  return (
    <div className="h-screen flex justify-center items-center w-full bg-slate-950 text-2xl font-boldm font-extralight">
      <span></span>
    </div>
  );
};

export default Verified;
