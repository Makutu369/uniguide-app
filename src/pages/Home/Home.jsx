import Navbar from "../../components/SignPage/Navbar";
// eslint-disable-next-line react/no-unescaped-entities
import { HoverBorderGradient } from "../../components/ui/hover-gradient";
import Hero from "../../assets/svgs/hero";
import PrimaryButton from "../../components/SignPage/PrimaryButton";
import LoginBtn from "./components/loginBtn";
import { Link } from "react-router-dom";
import { FlipWords } from "../../components/ui/flip-words";
const Home = () => {
  const words = ["univeristy", "grades", "Gemini"];
  return (
    <>
      <div className=" font-boldm antialiased text-black bg-white dark:bg-mainbackground dark:text-white w-full h-screen overflow-hidden flex-col">
        <Navbar route={"/"}>
          {" "}
          <Link
            to={"/faqs"}
            className="cursor-pointer pr-5 border-r border-white/10  hover:text-secondary transition-colors duration-500 text-slate-400"
          >
            FAQ
          </Link>
          <LoginBtn />
        </Navbar>
        <div className="flex relative px-6 md:px-[60px] py-12 h-[90vh]">
          <div className=" pt-7 h-full md:text-6xl text-4xl relative z-50 text-primary flex flex-col w-[50%]">
            <span className="pb-3   decoration-pink-400 font-extrabold">
              <span>How will you shape your future?</span>
            </span>
            <span className="font-montserrat mb-3 font-semibold ">
              Lets navigate your university journey together
            </span>{" "}
            <div className="flex md:text-3xl text-2xl ">
              <span className="">core features</span>{" "}
              <FlipWords words={words} className={"inline"} />{" "}
            </div>
            <PrimaryButton input={"Join"} route={"register"} />{" "}
          </div>
          <div className="absolute h-full w-[50%] z-10 right-6 top-0 hidden md:block">
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
