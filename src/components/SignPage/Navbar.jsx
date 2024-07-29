import Logo from "../../assets/svgs/logo";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ children }) => {
  return (
    <div className="flex border-b border-white/15 py-2 px-20 justify-between items-center w-full h-14 ">
      <Link to={"/"} className="w-32 h-11 flex items-center justify-center">
        <Logo />
      </Link>
      <div className="flex py-2 {} justify-center items-center gap-x-5">
        <p className="cursor-pointer hover:text-secondary transition-colors duration-500 text-slate-400">
          FAQ
        </p>
        <p className="cursor-pointer text-slate-400 hover:text-secondary transition-colors">
          features
        </p>
        {children}
      </div>
    </div>
  );
};
export default Navbar;
