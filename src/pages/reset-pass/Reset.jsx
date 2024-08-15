import Animate from "./animation/animate";
import { useLocation } from "react-router-dom";
import { usePass } from "./store/pass-store";
import { useState } from "react";
import { Link } from "react-router-dom";

const Reset = () => {
  const location = useLocation();
  const queryparam = new URLSearchParams(location.search);
  const token = queryparam.get("token");
  const [isEqual, setResult] = useState(true);

  const { postPass, result } = usePass();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());
    const { password, confirm } = formEntries;
    if (password !== confirm) setResult(false);
    //check if password is valid
    /**
     * get the token from the url
     * use the token to store the information in the database
     */
    if (isEqual) await postPass(password, token);
  };
  console.log(result);
  return (
    <div className="w-full font-boldm h-screen flex">
      <div className="w-[50%] hidden md:flex relative bg-mainbackground  justify-center items-center">
        <h3 className="absolute top-1 flex justify-center left-1 text-red-400">
          <Link to={"/"} className="no-underline text-red-400 text-2xl">
            Uniguide
          </Link>
        </h3>

        <Animate />
      </div>
      <div className="grow flex bg-graySecondary   flex-col gap-y-14 p-2 py-24">
        <div className="w-[90%] ">
          <div className="mx-auto flex flex-col">
            <h2 className="self-center text-4xl">Uniguide</h2>
            <h3 className="self-center">Enter your password</h3>
          </div>

          <form
            method="submit"
            onSubmit={handleSubmit}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col gap-9 w-[80%]">
              <div>
                <span className="font-montserrat text-nowrap">
                  Enter Password
                </span>
                <label className="input input-bordered flex items-center gap-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="text" className="grow" name="password" />
                </label>
              </div>{" "}
              <div>
                <span className="font-montserrat">confirm password</span>
                <label className="input input-bordered flex items-center gap-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="password" className="grow" name="confirm" />
                </label>
              </div>{" "}
              <div value="" className="flex justify-between">
                <button className="btn-circle bg-white/70 active:bg-white/50 w-32 text-black">
                  submit
                </button>
                <Link to={"/"} className="self-center no-underline">
                  back to home
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
