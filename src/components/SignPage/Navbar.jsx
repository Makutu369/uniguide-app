import Hamburger from "../../assets/svgs/hamburger";
import Logo from "../../assets/svgs/logo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex py-2 px-20 justify-between w-full h-14 ">
      <div onClick={() => navigate("/")} className="flex h-9">
        <Logo />
      </div>
      <div className="flex py-2  justify-center items-center gap-x-5">
        <input
          placeholder="search universities"
          className="bg-formbackground border-none my-0 h-11 outline-none bg-opacity-20 rounded-full px-5 w-44 "
          type="text"
        />
        <p className="text-slate-400">FAQ</p>
        <p className="text-slate-400">features</p>
        <Hamburger />
      </div>
    </div>
  );
};
export default Navbar;
