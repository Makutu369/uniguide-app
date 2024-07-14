import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Animation from "./components/animation";

const Verified = () => {
  const location = useLocation();
  const queryparam = new URLSearchParams(location.search);
  const value = queryparam.get("q");
  const [result, setResult] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const response = await fetch(
          `https://uniguide-back.onrender.com/user/verifyEmail?token=${value}`
        );
        if (response.status !== 200) {
          setIsloading(false);
          setResult("invalid request");
          return;
        }
        const data = await response.json();
        setIsloading(false);
        setResult(data.message);
      } catch (e) {
        console.log("there was an error :", e);
        setResult("there was an error");
      }
    })();
  }, [value]);
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full  text-[60px] font-boldm font-semibold">
      <span>{result}</span>
      {isloading && <Animation />}
    </div>
  );
};

export default Verified;
