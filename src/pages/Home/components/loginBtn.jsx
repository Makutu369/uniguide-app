import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eyeView from "../../../assets/eye_view.svg";
import eyeSlash from "../../../assets/eye_slash.svg";
import closeIcon from "../../../assets/close-button.svg";
import arrow from "../../../assets/arrow-right.svg";
import Animate from "./Animate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "@nextui-org/react";
/**
 *
 * @returns a login button with takes in the jwt form the user
 */
const LoginBtn = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [isloading, setIsloading] = useState(false);
  const [issucces, setIssuccess] = useState(false);
  const success = () => toast("user logged in successfully");
  const changeType = () => {
    type === "password" ? setType("text") : setType("password");
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData.entries());
    const email = formEntries.email;
    const password = formEntries.password;
    const url = "https://uniguide-back.onrender.com";

    try {
      setIsloading(true);
      setIssuccess(false);
      const response = await fetch(`${url}/user/sign`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      setIsloading(false);
      if (data.success) {
        success();
        setIssuccess(true);
        const token = response.headers.get("x-auth-token");
        localStorage.setItem("token", token);
        await delay(2000);
        navigate("/user/info");
        if (data.isDetails === true) {
          navigate("/dashboard");
        } else {
          navigate("/user/info");
        }
        console.log(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setIsloading(false);
      setIssuccess(false);
    }
  };

  return (
    <div className="small-text">
      <button
        className="btn sm:  bg-white/70 text-black active:bg-white/45 hover:bg-white/50 text-base rounded-full focus:border-2  outline-none "
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        sign in
      </button>
      <dialog id="my_modal_1" className="modal backdrop-blur-md rounded-none ">
        <div className="modal-box h-[70%] relative  flex flex-col items-center justify-center  bg-mainbackground rounded-lg">
          <form
            className="absolute top-2 right-2 rounded-full shadow-sm shadow-black/15 active:bg-white/30 transition-colors flex justify-center items-center bg-stone-800 w-8 h-8"
            method="dialog"
          >
            <button className="grow w-full h-full p-[6px]">
              <img src={closeIcon} alt="" className="w- h-full" />
            </button>
          </form>
          <div className="text-3xl">
            <span>welcome to</span>{" "}
            <span className="text-secondary">Uniguide</span>
          </div>
          <div className="modal-action text-white/80 w-full flex flex-col">
            <span className="block self-center text-2xl">Login</span>

            <form method="submit" onSubmit={handleLogin}>
              <div className="mb-2  rounded-full">
                <div>email</div>
                <label className="input bg-base-300 rounded-full input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    name="email"
                  />
                </label>
              </div>
              <div>password</div>
              <label className="input rounded-full bg-base-300 input-bordered  flex items-center gap-2">
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
                <input
                  type={type}
                  className="grow "
                  placeholder="password"
                  name="password"
                />{" "}
                <div className="w-6 h-">
                  <img
                    className="grow"
                    onClick={changeType}
                    src={type === "password" ? eyeView : eyeSlash}
                    alt=""
                  />
                </div>
              </label>
              <div className="">
                <button
                  type="submit"
                  className="btn mt-4 flex justify-center items-center bg-white text-black active:bg-white/45 hover:bg-white rounded-full"
                >
                  <div className="text-lg font-light">sign in</div>
                  {isloading && <Spinner color="secondary" />}
                  {issucces && (
                    <span className="h-8 w-8">
                      <Animate />
                    </span>
                  )}
                </button>
              </div>
            </form>
            <div className="self-center mt-14 group cursor-pointer text-white/40">
              <span className="group-hover:text-white/80">
                dont have an account?
              </span>{" "}
              <span
                className="inline cursor-pointer decoration-sky-500  hover:underline transition text-sky-300/70 hover:text-sky-400/95 "
                onClick={() => navigate("/register")}
              >
                register
              </span>
            </div>

            <div className="text-base group self-center flex gap-4 transition-transform cursor-pointer text-white/40 justify-center items-center">
              <span className="group-hover:text-white/70 group-active:text-white">
                forgot password?
              </span>{" "}
              <div className="h-2 w-4 flex  items-center justify-center ">
                <img
                  src={arrow}
                  alt=""
                  className="opacity-40 group-hover:opacity-80 group-hover:translate-x-5 transition-transform duration-300"
                />
              </div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
            </div>
          </div>
          <ToastContainer position="top-right" autoClose={5000} />
        </div>
      </dialog>
    </div>
  );
};

export default LoginBtn;
