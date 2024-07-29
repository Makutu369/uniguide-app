import Logo from "../../assets/svgs/logo";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ children }) => {
  return (
    <div className="flex border-b border-white/10 py-2 px-20 justify-between items-center w-full h-14 ">
      <Link to={"/"} className="w-32 h-11 flex items-center justify-center">
        <Logo />
      </Link>
      <div className="flex py-2 {} justify-center items-center gap-x-5">
        <p className="cursor-pointer text-slate-400 hover:text-secondary transition-colors border-r border-white/5 px-2">
          features
        </p>
        {children}
      </div>
    </div>
  );
};
export default Navbar;
