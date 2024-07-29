import Navbar from "../../components/SignPage/Navbar";
// eslint-disable-next-line react/no-unescaped-entities
import Hero from "../../assets/svgs/hero";
import PrimaryButton from "../../components/SignPage/PrimaryButton";
import LoginBtn from "./components/loginBtn";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className=" font-boldm antialiased text-white w-full h-screen overflow-hidden flex-col">
        <Navbar>
          {" "}
          <Link
            to={"/faqs"}
            className="cursor-pointer border-r border-white/5 pr-5 hover:text-secondary transition-colors duration-500 text-slate-400"
          >
            FAQ
          </Link>
          <LoginBtn />{" "}
        </Navbar>
        <div className="flex relative  px-[80px] py-12 h-full">
          <div className=" pt-7 relative z-50 flex flex-col  max-w-[700px]">
            <span className="pb-3  text-7xl decoration-pink-400 font-extrabold">
              How will you shape your future?{" "}
            </span>
            <span className="mb-3 text-7xl font-semibold ">
              Lets navigate your university journey together
            </span>
            <span className="text-lg font-light mb-9 text-white/65">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste,
              nam voluptates perspiciatis quae placeat est eligendi a quibusdam,
              non ipsum ex voluptate voluptatum commodi quidem asperiores soluta
              rem similique!
            </span>
            <PrimaryButton
              input={"search Universities"}
              route={"universities"}
            />
          </div>
          <div className="absolute h-96 z-10 right-6 top-0">
            <Hero />
          </div>
        </div>
      </div>
      <div className="h-screen w-full snap-mandatory bg-stone-300"></div>
    </>
  );
};

export default Home;
