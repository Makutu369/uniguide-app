import { Link } from "react-router-dom";
import logo from "../../assets/logo1.svg";

// eslint-disable-next-line react/prop-types
const Navbar = ({ children, route, tour }) => {
  return (
    <div className="flex border-b  border-black/10 bg-white dark:border-white/10 py-2 sm:px-16 px-6 justify-between items-center w-full h-14   dark:bg-graySecondary ">
      <Link to={`${route}`} className="flex gap-x-3 no-underline">
        <div className="w-8 h-8 flex items-center justify-normal">
          <img src={logo} alt="" />
        </div>
        <span className=" no-underline font-montserrat text-black dark:text-white self-center text-xl font-bold ">
          uniguide
        </span>
      </Link>

      <div className="flex py-2 {} justify-center items-center gap-x-5 ">
        <Link
          to={"/tour"}
          className={`cursor-pointer border-r border-white/10 pr-5 text-black dark:text-slate-400  hover:text-secondary transition-colors ${tour}`}
        >
          Tour
        </Link>
        {children}
      </div>
    </div>
  );
};
export default Navbar;
