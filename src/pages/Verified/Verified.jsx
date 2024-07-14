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
    <div className="h-screen flex flex-col justify-center items-center w-full  text-[48px] font-boldm font-medium">
      <span>{result}</span>
      {isloading && (
        <div className="flex flex-col justify-center items-centerborder-2 w-[40%] h-[60%]">
          <div className="text-nowrap self-center">
            Verifying your account...
          </div>
          <div className="w-[50%] h-60">
            <Animation />
          </div>
        </div>
      )}
    </div>
  );
};

export default Verified;
