import Navbar from "../components/SignPage/Navbar";
import { motion } from "framer-motion";

import Hero from "../assets/svgs/hero";
const Home = () => {
  return (
    <div className="bg-mainbackground text-white w-full h-screen overflow-hidden flex-col">
      <Navbar />
      <div className="flex relative  px-[80px] py-12 h-full">
        <div className=" pt-7 relative z-50 flex flex-col  max-w-[700px]">
          <span className="pb-3  text-5xl decoration-pink-400">
            How will you shape your future?{" "}
          </span>
          <span className="mb-10  text-5xl">
            Let's navigate your university journey together"
          </span>
          <span className="text-xl font-light mb-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste,
            nam voluptates perspiciatis quae placeat est eligendi a quibusdam,
            non ipsum ex voluptate voluptatum commodi quidem asperiores soluta
            rem similique!
          </span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-primaryColor  bg-opacity-90  hover:cursor-pointer w-48 h-14 rounded-full"
            type="submit"
          >
            Search Universities
          </motion.button>
        </div>
        <div className="absolute h-96 z-10 right-6 top-0">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
