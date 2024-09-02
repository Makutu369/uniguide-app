import Navbar from "../../components/SignPage/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import Core from "./components/core";
import Elective from "./components/elective";

const Grade = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryparam = new URLSearchParams(location.search);
  const value = queryparam.get("q");
  const electiveData = value.split("  ");
  const [result, setResult] = useState(0);
  const coreData = [
    { label: "mathematics", name: "mathematics" },
    { label: "science", name: "science" },
    { label: "social studies", name: "socialStudies" },
    { label: "english", name: "english" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    //get the form data
    const form = new FormData(e.target);
    const formEntries = Object.fromEntries(form.entries());
    //send the data to the server
    //...
    const grade = Object.values(formEntries).reduce(
      (acc, index) => Number(acc) + Number(index),
      0
    );
    setResult(grade);
    const token = localStorage.getItem("token");
    const response = await fetch(
      `https://uniguide-back.onrender.com/user/grade?q=${grade}`,
      {
        headers: { "x-auth-token": token },
      }
    );
    if (response.ok) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="font-boldm gap-y-4 h-screen flex flex-col">
      <Navbar tour={"hidden"} />
      <div className="w-full flex-auto flex gap-y-6 flex-col py-12">
        <span className="md:text-4xl self-center">
          Let's Calculate your grade for you!
        </span>
        <form
          method="submit"
          onSubmit={handleSubmit}
          className="flex flex-col relative gap-y-6 border-white/20 border py-6 h-full w-[70%] mx-auto hover:shadow-[4px_4px_0px_0px_white] transition-shadow"
        >
          <Core data={coreData} />
          <Elective data={electiveData} result={result} />
        </form>
      </div>
    </div>
  );
};

export default Grade;
