import { Link } from "react-router-dom";
import logo from "../../assets/Graphic_Elements.svg";

// eslint-disable-next-line react/prop-types
const Navbar = ({ children, route }) => {
  return (
    <div className="flex border-b  border-white/10 py-2 px-16 justify-between items-center w-full h-14 ">
      <Link to={`${route}`} className="flex gap-x-3">
        <div className="w-14 h-11 flex items-center justify-normal">
          <img src={logo} alt="" />
        </div>
        <span className="font-montserrat self-center text-xl font-bold ">
          uniguide
        </span>
      </Link>

      <div className="flex py-2 {} justify-center items-center gap-x-5 ">
        <Link
          to={"/tour"}
          className="cursor-pointer border-r border-white/10 pr-5 text-slate-400 sm:inline-flex hidden hover:text-secondary transition-colors"
        >
          Tour
        </Link>
        {children}
      </div>
    </div>
  );
};
export default Navbar;
