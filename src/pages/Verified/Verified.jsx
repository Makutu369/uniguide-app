import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Animation from "./components/animation";
import { Link } from "react-router-dom";

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
    <div className="h-screen flex  justify-center items-center w-full  text-[48px] font-boldm font-medium">
      <div className="flex flex-col gap-y-3 text-xl sm:text-3xl">
        <span>{result}</span>
        {result && (
          <Link
            to={"/"}
            className="btn rounded-full w-[40%] border-white/10 shadow-md shadow-gray-500/5 border self-center font-montserrat"
          >
            back to home
          </Link>
        )}
        {isloading && (
          <>
            {" "}
            <div className="">Verifying your account...</div>
            <div className="h-[10%] w-[30%]">
              <Animation />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Verified;
