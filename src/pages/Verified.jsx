<<<<<<< HEAD
import { useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> main
import { useLocation } from "react-router-dom";

const Verified = () => {
  const location = useLocation();
  const queryparam = new URLSearchParams(location.search);
  const value = queryparam.get("q");
<<<<<<< HEAD
  useEffect(() => {
    //make a request before displaying data
    (async () => {
      const response = await fetch(
        `https://uniguide-back.onrender.com/verify-email?token=${value}`
      );
      const data = await response.json();
      console.log(data);
=======
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://uniguide-back.onrender.com/verify-email?q=${value}`
      );
      const data = await response.json();
      console.log(data);
      setData(data);
>>>>>>> main
    })();
  }, [value]);
  return (
    <div className="h-screen flex justify-center items-center w-full bg-slate-950 text-2xl font-boldm font-extralight">
<<<<<<< HEAD
      <span>Verified </span>
=======
      <span>Verified {data.message}</span>
>>>>>>> main
    </div>
  );
};

export default Verified;
